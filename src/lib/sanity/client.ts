import { createClient } from 'next-sanity';
import config from '~/lib/sanity/config';

const { apiVersion, dataset, projectId, useCdn } = config;
const clientBaseConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
} as const;

export function getClient() {
  const client = createClient(clientBaseConfig);

  return client;
}

export function getPreviewClient(token: string) {
  const client = createClient({
    ...clientBaseConfig,
    token,
    useCdn: false,
    ignoreBrowserTokenWarning: true,
    perspective: 'previewDrafts',
  });

  return client;
}
