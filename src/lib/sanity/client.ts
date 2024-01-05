import { createClient } from '@sanity-typed/next-sanity';
import config from '~/lib/sanity/config';
import type { SanityValues } from '../../../sanity.config';

const { apiVersion, dataset, projectId, useCdn } = config;
const clientBaseConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
} as const;

export function getClient() {
  const client = createClient<SanityValues>()(clientBaseConfig);

  const query = `*[_type=="post"]`;
  const d = client.fetch(query);
  //    ^?

  return client;
}

export function getPreviewClient(token: string) {
  const client = createClient<SanityValues>()({
    ...clientBaseConfig,
    token,
    useCdn: false,
    ignoreBrowserTokenWarning: true,
    perspective: 'previewDrafts',
  });

  return client;
}
