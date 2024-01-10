import { createClient } from 'next-sanity';
import config from '~/lib/sanity/config';

const client = createClient({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: config.apiVersion,
  useCdn: false,
  perspective: 'published',
});

export function getClient() {
  return client;
}
