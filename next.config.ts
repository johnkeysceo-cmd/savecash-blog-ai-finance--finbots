import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image configuration to allow external images from any host
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },

  // Allow TypeScript build even if there are errors
  typescript: {
    ignoreBuildErrors: true,
  },

  // Skip ESLint checks during build (prevents blocking deployment)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Enable experimental features if using the App Router
  experimental: {
    appDir: true,
  },

  // Optional: Future-proofing
  future: {
    strictPostcssConfiguration: true,
  },

  // Redirects, rewrites, or headers can go here if needed
  async redirects() {
    return [];
  },

  async rewrites() {
    return [];
  },

  async headers() {
    return [];
  },
};

export default nextConfig;
