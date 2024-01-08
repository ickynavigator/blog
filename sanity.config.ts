import type { InferSchemaValues } from '@sanity-typed/types';
import { defineConfig } from '@sanity-typed/types';
import { visionTool } from '@sanity/vision';
import { SanityDocument } from 'sanity';
import { Iframe } from 'sanity-plugin-iframe-pane';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import { deskTool } from 'sanity/desk';
import config from '~/lib/sanity/config';
import { schema } from '~/lib/sanity/schema';

const getSlug = (doc: SanityDocument) => {
  const slug = doc?.slug;

  if (
    typeof slug == 'object' &&
    slug != undefined &&
    'current' in slug &&
    typeof slug.current == 'string'
  ) {
    return slug.current;
  }

  throw new Error('The document must have a slug before it can be previewed.');
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
    deskTool({
      defaultDocumentNode: (S, { schemaType }) => {
        switch (schemaType) {
          case `post`:
            return S.document().views([
              S.view.form(),
              S.view
                .component(Iframe)
                .options({
                  url: {
                    origin: location.origin,
                    preview: (document: SanityDocument) =>
                      `/post/${getSlug(document)}`,
                    draftMode: '/api/draft',
                  },
                  reload: {
                    button: true,
                  },
                })
                .title('Preview'),
            ]);
          default:
            return S.document().views([S.view.form()]);
        }
      },
    }),
    visionTool({ defaultApiVersion }),
    vercelDeployTool(),
  ],
});

export type SanityValues = InferSchemaValues<typeof sanityConfig>;
export default sanityConfig;
