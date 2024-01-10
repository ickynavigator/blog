import { createClient } from 'next-sanity';
import { env } from '~/env/server.mjs';
import config from '~/lib/sanity/config';

const client = createClient({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: config.apiVersion,
  useCdn: env.SANITY_REVALIDATE_SECRET ? false : true,
  perspective: 'published',
});

export function getClient() {
  return client;
}
