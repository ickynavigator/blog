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

        <Group>
          {/* disabled color swatch till i can find a way to stop FART */}
          {/* <ColorSwatch /> */}
          <ThemeSwatch />
        </Group>
      </Group>
    </>
  );
};

export default Header;
