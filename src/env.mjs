import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    OPENAI_API_KEY: z.string(),
    BINANCE_API_KEY: z.string(),
    BINANCE_API_SECRET: z.string(),
    CMC_API_KEY: z.string(),
    GOOGLE_API_KEY: z.string(),
    WALLET_CONNECT_PROJECT_ID: z.string(),
    NEXTWORK_URL: z.string(),
  },
  client: {
    APP_NAME: z.string(),
  },
  runtimeEnv: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    BINANCE_API_KEY: process.env.BINANCE_API_KEY,
    BINANCE_API_SECRET: process.env.BINANCE_API_SECRET,
    CMC_API_KEY: process.env.CMC_API_KEY,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    WALLET_CONNECT_PROJECT_ID: process.env.WALLET_CONNECT_PROJECT_ID,
    NEXTWORK_URL: process.env.NEXTWORK_URL,
    APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  },
});
