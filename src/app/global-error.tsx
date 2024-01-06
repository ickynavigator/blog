'use client';

import { Button, Container, Group, Text, Title } from '@mantine/core';
import { useRouter } from 'next/navigation';
import classes from './error.module.css';

function GlobalError() {
  const router = useRouter();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>500</div>
        <Title className={classes.title}>Something bad just happened...</Title>
        <Text size="lg" ta="center" className={classes.description}>
          Our servers could not handle your request. Don&apos;t worry, our
          development team was already notified. Try refreshing the page.
        </Text>
        <Group justify="center">
          <Button
            size="md"
            onClick={function () {
              router.refresh();
            }}
          >
            Refresh the page
          </Button>
        </Group>
      </Container>
    </div>
  );
}

export default GlobalError;
