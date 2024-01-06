'use client';

import { Group, Pagination as MantinePagination } from '@mantine/core';
import Link from 'next/link';
import classes from './index.module.css';

interface IPagination {
  total: number;
  current: number;
  builder: (page: number) => string;
}

function Pagination(props: IPagination) {
  const { total, current, builder } = props;

  return (
    <>
      <MantinePagination.Root
        total={total}
        value={current}
        radius="md"
        getItemProps={(page: number) => {
          return { component: Link, href: builder(page) };
        }}
      >
        <Group gap={7} mt="xl">
          <MantinePagination.First
            component={Link}
            href={builder(1)}
            className={classes.tab}
          />
          <MantinePagination.Previous
            component={Link}
            href={builder(current - 1)}
            className={classes.tab}
          />
          <MantinePagination.Items />
          <MantinePagination.Next
            component={Link}
            href={builder(current + 1)}
            className={classes.tab}
          />
          <MantinePagination.Last
            component={Link}
            href={builder(total)}
            className={classes.tab}
          />
        </Group>
      </MantinePagination.Root>
    </>
  );
}

export default Pagination;
