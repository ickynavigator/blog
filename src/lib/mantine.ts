'use client';

import { Loader, createTheme } from '@mantine/core';
import { SpinningCoinLoader } from '~/components/loader';

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
});

export default theme;
