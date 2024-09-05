import { env } from "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  output: 'export',
  basePath: env.NEXT_PUBLIC_GITHUB_REPOSITORY ? `/${env.NEXT_PUBLIC_GITHUB_REPOSITORY}` : '',
  // assetPrefix: env.NEXT_PUBLIC_GITHUB_REPOSITORY ? `/${env.NEXT_PUBLIC_GITHUB_REPOSITORY}/` : '',
  trailingSlash: true, // Ensures URLs end with a slash for GitHub Pages
};

export default config;