import { Center, SimpleGrid, Stack, Title } from '@mantine/core';
import { Metadata } from 'next';
import PostPagination from '~/components/pagination/post.pagination';
import PostCard from '~/components/postCard';
import {
  BASE_FETCH_TAG,
  CATCH_ALL_TAG,
  ITEMS_PER_PAGE,
  PREGEN_PAGE_COUNT,
} from '~/lib/constants';
import { getClient } from '~/lib/sanity/client';
import { SanityValues } from '../../../../../../sanity.config';

type Props = {
  params: {
    tag: string;
    /**
     * first element is the page number
     */
    q?: string[];
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = params.tag;

  return {
    title: `#${tag}`,
  };
}

export async function generateStaticParams() {
  const CATEGORIES_FRAGMENT = /* groq */ `*[_type == "category"]{ "tag": slug.current }`;
  const slugs = (await client.fetch(CATEGORIES_FRAGMENT)) as { tag: string }[];

  const stat: Props[] = [];

  slugs.forEach(({ tag }) => {
    stat.push({ params: { tag } });

    for (let i = 1; i <= PREGEN_PAGE_COUNT; i++) {
      stat.push({ params: { tag, q: [`${i}`] } });
    }
  });

  return stat;
}

const client = getClient();
async function Page(props: Props) {
  const { tag, q } = props.params;

  const pageNumber = Number(q?.[0]) || 1;

  const _POSTS_FRAGMENT = /* groq */ `*[_type=="post"${
    tag === CATCH_ALL_TAG ? '' : ` && $postTag in tags[]->slug.current`
  }]`;
  const POSTS_FRAGMENT = /* groq */ `{
      'posts':  ${_POSTS_FRAGMENT}   
                | order(_updatedAt desc)
                [($pageIndex * ${ITEMS_PER_PAGE})...($pageIndex + 1) * ${ITEMS_PER_PAGE}],
      "pagination": {
        "totalCount": count(${_POSTS_FRAGMENT}._id),
        "pageNumber": $pageIndex + 1,
      }
  }`;
  const { posts, pagination } = await client.fetch(
    POSTS_FRAGMENT,
    {
      pageIndex: pageNumber - 1,
      postTag: tag,
    },
    {
      next: {
        tags: [BASE_FETCH_TAG],
      },
    },
  );

  return (
    <Stack>
      <Center>
        <Title>#{tag}</Title>
      </Center>

      <Center>
        <PostPagination
          total={Math.ceil(pagination.totalCount / ITEMS_PER_PAGE)}
          current={pagination.pageNumber}
          tag={props.params.tag}
        />
      </Center>

      <SimpleGrid cols={{ base: 2, md: 3 }}>
        {posts.map((post: SanityValues['post']) => (
          <PostCard key={post._id} {...post} />
        ))}
      </SimpleGrid>

      <Center>
        <PostPagination
          total={Math.ceil(pagination.totalCount / ITEMS_PER_PAGE)}
          current={pagination.pageNumber}
          tag={props.params.tag}
        />
      </Center>
    </Stack>
  );
}

export default Page;
