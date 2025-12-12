import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: "./",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  reactCompiler: true,
};

export default nextConfig;
