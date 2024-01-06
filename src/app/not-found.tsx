'use client';

import { Anchor, Button, Container, Group, Text, Title } from '@mantine/core';
import Link from 'next/link';
import classes from './error.module.css';

function NotFound() {
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>400</div>
        <Title className={classes.title}>You have found a secret place.</Title>
        <Text size="lg" ta="center" className={classes.description}>
          Unfortunately, this is only a 404 page. You may have mistyped the
          address, or the page has been moved to another URL.
        </Text>
        <Group justify="center">
          <Anchor component={Link} href="/">
            <Button size="md">Go Home</Button>
          </Anchor>
        </Group>
      </Container>
    </div>
  );
}

export default NotFound;
