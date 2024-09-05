import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_GITHUB_REPOSITORY: z.string().optional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_GITHUB_REPOSITORY: process.env.NEXT_PUBLIC_GITHUB_REPOSITORY,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});