'use client';

import { Loader, createTheme } from '@mantine/core';
import { SpinningCoinLoader } from '~/components/loader';
import colors from './colors';

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: {
          ...Loader.defaultLoaders,
          spinningCoin: SpinningCoinLoader,
        },
      },
    }),
  },
  colors: {
    ...colors,
  },
});

export default theme;
