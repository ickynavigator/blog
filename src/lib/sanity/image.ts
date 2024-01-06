import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import config from '~/lib/sanity/config';

const { dataset, projectId } = config;
export const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (source?: Image) => {
  if (!source) {
    return undefined;
  }

  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined;
  }

  return imageBuilder?.image(source).auto('format');
};
