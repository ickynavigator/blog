import {
  Anchor,
  Badge,
  Center,
  Group,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import Link from 'next/link';
import PostPagination from '~/components/pagination/post.pagination';
import PostCard from '~/components/postCard';
import { getClient } from '~/lib/sanity/client';
import { SanityValues } from '../../../sanity.config';
import classes from './page.module.css';

export const dynamic = 'force-dynamic';
const client = getClient();
const ITEMS_PER_PAGE = 10;
export default async function Home({
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

      <Group>
        {categories.map((category: SanityValues['category']) => (
          <Anchor
            key={category._id}
            href={`/tag/${category.slug.current}`}
            component={Link}
            passHref
          >
            <Badge variant="outline" radius="md" className={classes.badge}>
              {category.title}
            </Badge>
          </Anchor>
        ))}
      </Group>

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
