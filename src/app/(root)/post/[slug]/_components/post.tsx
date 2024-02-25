import { Stack, Group, Title, Text, Image } from '@mantine/core';
import { PortableText } from '@portabletext/react';
import { portableTextCustomComponents as PTCustomComponents } from '~/lib/portableText';
import CategoryList from '~/components/categorylist';
import { formatDate } from '~/lib/date';
import { SanityValues } from '../../../../../../sanity.config';
import { urlForImage } from '~/lib/sanity/image';

interface Props {
  post: SanityValues['post'];
}

function Post(props: Props) {
  const { post } = props;

  const img = urlForImage(post.mainImage)?.url();

  return (
    <Stack>
      <Group justify="space-between" align="flex-end">
        <Title order={1}>{post.title}</Title>
        <Text c="dimmed">{formatDate(new Date(post.postedAt))}</Text>
      </Group>

      <CategoryList categories={post.tags as any} />

      <Image src={img} alt={`main image for ${post.title}`} radius="lg" />

      <Text fw={700}>{post.description}</Text>

      <PortableText value={post.body} components={PTCustomComponents} />
    </Stack>
  );
}

export default Post;
