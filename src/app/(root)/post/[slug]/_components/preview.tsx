'use client';

import { PAGE_FRAGMENT } from '~/app/(root)/post/[slug]/_components/query';
import Post from '~/app/(root)/post/[slug]/_components/post';
import { Center, Title } from '@mantine/core';
import { QueryResponseInitial, useQuery } from '@sanity/react-loader';

type Post = any;

interface Props {
  initial: QueryResponseInitial<Post>;
  slug: string;
}

export default function PostPreview({ initial, slug }: Props) {
  const { data } = useQuery<Post>(PAGE_FRAGMENT, { slug }, { initial });

  return data ? (
    <Post post={data} />
  ) : (
    <Center h="100%">
      <Title order={1}>
        {"Looks like that post either doesn't exist or it has been taken down"}
      </Title>
    </Center>
  );
}
