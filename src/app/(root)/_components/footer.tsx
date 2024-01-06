import { ActionIcon, Anchor, Group, Text, rem } from '@mantine/core';
import { IconBrandGithub, IconUser } from '@tabler/icons-react';
import Link from 'next/link';
import classes from './footer.module.css';

const sourceCodeLink = 'https://github.com/ickynavigator/blog';
const portfolioLink = 'https://obifortune.com';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Group justify="space-between" h="100%">
        <Text>
          Obi Fortune | Copyright © {new Date().getFullYear()}. All rights
          reserved.
        </Text>

        <Group gap="5">
          <Anchor
            component={Link}
            href={portfolioLink}
            passHref
            target="_blank"
          >
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconUser
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Anchor>
          <Anchor
            component={Link}
            href={sourceCodeLink}
            passHref
            target="_blank"
          >
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandGithub
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Anchor>
        </Group>
      </Group>
    </footer>
  );
};

export default Footer;
