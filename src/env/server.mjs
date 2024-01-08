import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    SANITY_API_READ_TOKEN: z.string().optional(),
    SANITY_REVALIDATE_SECRET: z.string().optional(),
  },
  runtimeEnv: {
    SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN,
    SANITY_REVALIDATE_SECRET: process.env.SANITY_REVALIDATE_SECRET,
  },
});
