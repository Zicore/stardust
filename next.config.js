/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import { env } from "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  output: 'export',
  assetPrefix: env.NEXT_PUBLIC_BASE_PATH ? `/${env.GITHUB_REPOSITORY}/` : '',
  basePath: env.NEXT_PUBLIC_BASE_PATH ? `/${env.GITHUB_REPOSITORY}` : '',
  trailingSlash: true,
};

export default config;
