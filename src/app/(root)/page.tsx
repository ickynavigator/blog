import { Center, SimpleGrid, Stack, Text } from '@mantine/core';
import CategoryList from '~/components/categorylist';
import PostPagination from '~/components/pagination/post.pagination';
import PostCard from '~/components/postCard';
import { CATCH_ALL_TAG, ITEMS_PER_PAGE } from '~/lib/constants';
import { getClient } from '~/lib/sanity/client';
import { SanityValues } from '../../../sanity.config';

const client = getClient();

export const generateStaticParams = async () => {
  return [];
};

async function Page() {
  const CATEGORIES_FRAGMENT = /* groq */ `*[_type == "category"]`;

  const _POSTS_FRAGMENT = /* groq */ `*[_type=="post"]`;
  const POSTS_FRAGMENT = /* groq */ `{
    'posts':  ${_POSTS_FRAGMENT}   
              | order(_updatedAt desc)
              [(0 * ${ITEMS_PER_PAGE})...(1) * ${ITEMS_PER_PAGE}],
    "pagination": {
      "totalCount": count(${_POSTS_FRAGMENT}._id),
    }
}`;

  const categories = await client.fetch(CATEGORIES_FRAGMENT);
  const { posts, pagination } = await client.fetch(POSTS_FRAGMENT);

  return (
    <Stack>
      <Text my="sm">
        Welcome to my blog, collection of random thoughts and occasional
        tutorials (hopefully)
      </Text>

      <CategoryList categories={categories} />

      <SimpleGrid cols={{ base: 2, md: 3 }}>
        {posts.map((post: SanityValues['post']) => (
          <PostCard key={post._id} {...post} />
        ))}
      </SimpleGrid>

      <Center>
        <PostPagination
          total={Math.ceil(pagination.totalCount / ITEMS_PER_PAGE)}
          current={1}
          tag={CATCH_ALL_TAG}
        />
      </Center>
    </Stack>
  );
}

export default Page;
