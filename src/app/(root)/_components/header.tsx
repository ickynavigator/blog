import { Anchor, Group, Title } from '@mantine/core';
import Link from 'next/link';
import ThemeSwatch from './themeSwatch';

const Header = () => {
  return (
    <>
      <Group justify="space-between" component="header" py="md">
        <Anchor href="/" component={Link} underline="never">
          <Title>Obi Fortune</Title>
        </Anchor>

        <ThemeSwatch />
      </Group>
    </>
  );
};

export default Header;
