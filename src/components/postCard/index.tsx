'use client';

import { Anchor, Card, Group, Image, Text } from '@mantine/core';
import Link from 'next/link';
import { urlForImage } from '~/lib/sanity/image';
import { SanityValues } from '../../../sanity.config';

const PostCard = (props: SanityValues['post']) => {
  const img = urlForImage(props.mainImage)?.url();

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          className="post__cover"
          src={img}
          height={231}
          width={367}
          alt=""
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{props.title}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {props.description}
      </Text>

      <Anchor component={Link} href={`/post/${props.slug.current}`}>
        Read More
      </Anchor>
    </Card>
  );
};

export default PostCard;
