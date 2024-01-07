import { Box, MantineLoaderComponent } from '@mantine/core';
import cx from 'clsx';
import { forwardRef } from 'react';
import classes from './index.module.css';

export const SpinningCoinLoader: MantineLoaderComponent = forwardRef(
  ({ className, ...others }, ref) => (
    <Box
      component="span"
      className={cx(classes.loader, className)}
      {...others}
      ref={ref}
    />
  ),
);

SpinningCoinLoader.displayName = 'SpinningCoinLoader';
