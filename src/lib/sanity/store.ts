import * as queryStore from '@sanity/react-loader';
import { env } from '~/env';

import { getClient } from '~/lib/sanity/client';

queryStore.setServerClient(
  getClient().withConfig({ token: env.SANITY_API_READ_TOKEN }),
);

export const { loadQuery } = queryStore;
