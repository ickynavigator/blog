import { Center, SimpleGrid, Stack, Text } from '@mantine/core';
import CategoryList from '~/components/categorylist';
import PostPagination from '~/components/pagination/post.pagination';
import PostCard from '~/components/postCard';
import { getClient } from '~/lib/sanity/client';
import { SanityValues } from '../../../sanity.config';

const client = getClient();
const ITEMS_PER_PAGE = 10;
async function Page({
  searchParams,
}: {
  searchParams: { p: string | undefined };
}) {
  const pageNumber = Number(searchParams.p) || 1;

  const CATEGORIES_FRAGMENT = /* groq */ `*[_type == "category"]`;
  const categories = await client.fetch(CATEGORIES_FRAGMENT);
  const _POSTS_FRAGMENT = /* groq */ `*[_type=="post"]`;
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
  });

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
          current={pagination.pageNumber}
        />
      </Center>
    </Stack>
  );
}

export default Page;
