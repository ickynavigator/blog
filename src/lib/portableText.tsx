import { CodeHighlight } from '@mantine/code-highlight';
import {
  Anchor,
  Blockquote,
  Code,
  List,
  ListItem,
  Text,
  Title,
} from '@mantine/core';
import { PortableTextReactComponents } from '@portabletext/react';

export const portableTextCustomComponents: Partial<PortableTextReactComponents> =
  {
    block: {
      normal: ({ children }) => <Text>{children}</Text>,
      unstyled: ({ children }) => <>{children}</>,
      h1: ({ children }) => <Title order={1}>{children}</Title>,
      h2: ({ children }) => <Title order={2}>{children}</Title>,
      h3: ({ children }) => <Title order={3}>{children}</Title>,
      h4: ({ children }) => <Title order={4}>{children}</Title>,
      h5: ({ children }) => <Title order={5}>{children}</Title>,
      h6: ({ children }) => <Title order={6}>{children}</Title>,
      blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
    },

    list: {
      bullet: ({ children }) => <List type="ordered">{children}</List>,
      number: ({ children }) => <List type="ordered">{children}</List>,
    },

    listItem: ({ children }) => <ListItem>{children}</ListItem>,

    marks: {
      em: ({ children }) => <Text component="em">{children}</Text>,
      strong: ({ children }) => <Text component="strong">{children}</Text>,
      underline: ({ children }) => (
        <Text component="span" td="underline">
          {children}
        </Text>
      ),
      link: ({ children, value }) => (
        <Anchor href={value?.URL} target="_blank">
          {children}
        </Anchor>
      ),
      'strike-through': ({ children }) => (
        <Text component="del">{children}</Text>
      ),
      code: ({ children }) => {
        return <Code>{children}</Code>;
      },
      codeBlock: ({ value, text }) => {
        return (
          <CodeHighlight
            language={value.language}
            code={text}
            styles={{
              code: {
                lineHeight: 'calc(.8125rem*var(--mantine-scale))',
              },
            }}
          />
        );
      },
    },
  };
