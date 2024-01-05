import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    SANITY_API_READ_TOKEN: z.string().optional().default(''),
  },
  runtimeEnv: {
    SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN,
  },
});
