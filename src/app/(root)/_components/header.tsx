import { Anchor, Group, Title } from '@mantine/core';
import Link from 'next/link';
import ColorSwatch from './colorSwatch';
import ThemeSwatch from './themeSwatch';

const Header = () => {
  return (
    <>
      <Group justify="space-between" component="header" py="md">
        <Anchor href="/" component={Link} underline="never">
          <Title>Obi Fortune</Title>
        </Anchor>

        <Group>
          <ColorSwatch />
          <ThemeSwatch />
        </Group>
      </Group>
    </>
  );
};

export default Header;
