import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Next.js scroll restoration — we handle it ourselves via Lenis
  experimental: {
    scrollRestoration: false,
  },
};

export default nextConfig;
