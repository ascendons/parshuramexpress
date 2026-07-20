import type { NextConfig } from "next";

// Served from the www.parshuramexpress.com custom domain root, so no basePath/assetPrefix.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
