import { Center, SimpleGrid, Stack, Title } from '@mantine/core';
import PostPagination from '~/components/pagination/post.pagination';
import PostCard from '~/components/postCard';
import { getClient } from '~/lib/sanity/client';
import { SanityValues } from '../../../../../sanity.config';

const client = getClient();
const ITEMS_PER_PAGE = 10;
export default async function Page(props: {
  params: { tag: string };
  searchParams: { p: string | undefined };
}) {
  const pageNumber = Number(props.searchParams.p) || 1;

  const _POSTS_FRAGMENT = /* groq */ `*[_type=="post" && $tag in tags[]->slug.current]`;
  const POSTS_FRAGMENT = /* groq */ `{
      'posts':  ${_POSTS_FRAGMENT}   
                | order(_updatedAt desc)
                [($pageIndex * ${ITEMS_PER_PAGE})...($pageIndex + 1) * ${ITEMS_PER_PAGE}],
      "pagination": {
        "totalCount": count(${_POSTS_FRAGMENT}._id),
        "pageNumber": $pageIndex + 1,
      }
  }`;
  const { posts, pagination } = await client.fetch(POSTS_FRAGMENT, {
    pageIndex: pageNumber - 1,
    tag: props.params.tag,
  });

  return (
    <Stack>
      <Center>
        <Title>#{props.params.tag}</Title>
      </Center>

      <Center>
        <PostPagination
          total={Math.ceil(pagination.totalCount / ITEMS_PER_PAGE)}
          current={pagination.pageNumber}
        />
      </Center>

      <SimpleGrid cols={3}>
        {posts.map((post: SanityValues['post']) => (
          <PostCard key={post._id} {...post} />
        ))}
      </SimpleGrid>

      <Center>
        <PostPagination
          total={Math.ceil(pagination.totalCount / ITEMS_PER_PAGE)}
          current={pagination.pageNumber}
        />
      </Center>
    </Stack>
  );
}
