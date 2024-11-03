import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import bundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer({
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
});

// Only run setupDevPlatform in development mode
if (process.env.NODE_ENV === "development") {
  setupDevPlatform();
}

export default nextConfig;
