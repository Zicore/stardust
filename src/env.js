import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    GITHUB_REPOSITORY: z.string().optional(), // GitHub Pages repository (optional)
  },
  client: {
    NEXT_PUBLIC_BASE_PATH: z.string().optional(), // Client-side base path (optional)
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    GITHUB_REPOSITORY: process.env.GITHUB_REPOSITORY,
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
