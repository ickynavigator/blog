import { createClient } from 'next-sanity';
import config from '~/lib/sanity/config';

export function getClient(preview?: { token: string }) {
  const { apiVersion, dataset, projectId, useCdn } = config;
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
  });

  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts');
    }

    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    });
  }
  return client;
}
