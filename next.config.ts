import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: false,
  basePath: '/fall2025',
  assetPrefix: '/fall2025/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
