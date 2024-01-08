import type { InferSchemaValues } from '@sanity-typed/types';
import { defineConfig } from '@sanity-typed/types';
import { visionTool } from '@sanity/vision';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import { deskTool } from 'sanity/desk';
import config from '~/lib/sanity/config';
import { schema } from '~/lib/sanity/schema';

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
  plugins: [deskTool(), visionTool({ defaultApiVersion }), vercelDeployTool()],
});

export type SanityValues = InferSchemaValues<typeof sanityConfig>;
export default sanityConfig;
