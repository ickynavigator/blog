import { CodeHighlight } from '@mantine/code-highlight';
import { Code, Group, Image, Stack, Text, Title } from '@mantine/core';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { formatDate } from '~/lib/date';
import { getClient } from '~/lib/sanity/client';
import { urlForImage } from '~/lib/sanity/image';
import { SanityValues } from '../../../../../sanity.config';

const client = getClient();

const PTCustomComponents: Partial<PortableTextReactComponents> = {
  // hardBreak: false,
  block: {
    normal: ({ children }) => <Text>{children}</Text>,
    code: ({ children }) => <>{children}</>,
  },

  marks: {
    code: ({ children }) => {
      return <Code>{children}</Code>;
    },
    codeBlock: ({ value, text }) => {
      return (
        <CodeHighlight
          language={value.language}
          code={text}
          withCopyButton={false}
        />
      );
    },
  },
};

async function Page(props: { params: { slug: string } }) {
  const { slug } = props.params;
  const PAGE_FRAGMENT = /* groq */ `*[_type == "post" && slug.current == $slug][0]`;
  const post = (await client.fetch(PAGE_FRAGMENT, {
    slug,
  })) as SanityValues['post'];

  const img = urlForImage(post.mainImage)?.url();

  return (
    <Stack my="md">
      <Group justify="space-between" align="flex-end">
        <Title order={1}>{post.title}</Title>
        <Text c="dimmed">{formatDate(new Date(post.postedAt))}</Text>
      </Group>

      <Image src={img} alt={`main image for ${post.title}`} radius="lg" />

      <Text fw={700}>{post.description}</Text>

      <PortableText value={post.body} components={PTCustomComponents} />
    </Stack>
  );
}

export default Page;
