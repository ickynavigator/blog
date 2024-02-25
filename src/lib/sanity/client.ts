import { createClient } from 'next-sanity';
import config from '~/lib/sanity/config';

const client = createClient({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: config.apiVersion,
  useCdn: config.useCdn,
  perspective: 'published',
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
});

export function getClient() {
  return client;
}
