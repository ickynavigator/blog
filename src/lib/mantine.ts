'use client';

import { Loader, createTheme } from '@mantine/core';
import { SpinningCoinLoader } from '~/components/loader';
import colors from './colors';
import { bricolage } from './font';

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
  fontFamily: bricolage.style.fontFamily,
});

export default theme;
