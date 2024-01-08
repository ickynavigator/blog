'use client';

import { Anchor, Card, Group, Image, Text } from '@mantine/core';
import Link from 'next/link';
import { urlForImage } from '~/lib/sanity/image';
import { SanityValues } from '../../../sanity.config';
import classes from './index.module.css';

const PostCard = (props: SanityValues['post']) => {
  const img = urlForImage(props.mainImage)?.url();

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="lg"
      className={classes.card}
      component={Link}
      href={`/post/${props.slug.current}`}
    >
      <Card.Section>
        <Image src={img} alt={`main image for ${props.title}`} radius="lg" />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{props.title}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {props.description}
      </Text>

      <Anchor component={'p'} underline="never">
        Read More
      </Anchor>
    </Card>
  );
};

export default PostCard;
