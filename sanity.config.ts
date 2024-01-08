import type { InferSchemaValues } from '@sanity-typed/types';
import { defineConfig } from '@sanity-typed/types';
import { visionTool } from '@sanity/vision';
import { SanityDocument } from 'sanity';
import { Iframe } from 'sanity-plugin-iframe-pane';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import { DefaultDocumentNodeResolver, deskTool } from 'sanity/desk';
import config from '~/lib/sanity/config';
import { schema } from '~/lib/sanity/schema';

const getPreviewUrl = (doc: SanityDocument) => {
  const slug = doc?.slug;

  if (typeof slug == 'object' && slug != undefined && 'current' in slug) {
    return slug?.current ? `/post/${slug.current}` : ``;
  }

  throw new Error('The document must have a slug before it can be previewed.');
};

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType },
) => {
  // Only show preview pane on `movie` schema type documents
  switch (schemaType) {
    case `post`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocument) => getPreviewUrl(doc),
          })
          .title('Preview'),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};

const { apiVersion: defaultApiVersion, dataset, projectId } = config;
const sanityConfig = defineConfig({
  basePath: '/studio',
  name: 'Blogger',
  title: 'Blogger',
  projectId,
  dataset,
  schema: {
    types: schema,
  },
  plugins: [
    deskTool({ defaultDocumentNode }),
    visionTool({ defaultApiVersion }),
    vercelDeployTool(),
  ],
});

export type SanityValues = InferSchemaValues<typeof sanityConfig>;
export default sanityConfig;
