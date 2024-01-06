import { Anchor, Group, Title } from '@mantine/core';
import Link from 'next/link';
import classes from './header.module.css';
import ThemeSwatch from './themeSwatch';

const Header = () => {
  return (
    <header className={classes.header}>
      <Group justify="space-between" h="100%">
        <Anchor href="/" component={Link} underline="never">
          <Title>Obi Fortune</Title>
        </Anchor>

        <ThemeSwatch />
      </Group>
    </header>
  );
};

export default Header;
