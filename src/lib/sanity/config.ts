import { env } from '~/env/client.mjs';

const config = {
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
};

export default config;
