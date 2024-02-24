import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';
import { vercel } from '@t3-oss/env-core/presets';

export const env = createEnv({
  client: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: z.string(),
    NEXT_PUBLIC_SANITY_DATASET: z.string().default('production'),
    NEXT_PUBLIC_SANITY_API_VERSION: z.string().default('2023-06-21'),
  },
  server: {
    SANITY_API_READ_TOKEN: z.string().optional(),
    SANITY_REVALIDATE_SECRET: z.string().optional(),
  },
  extends: [vercel],
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  },
});
