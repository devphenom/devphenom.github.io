import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // GitHub Pages has no Node server to run the default optimizer.
    unoptimized: true,
  },
};

export default nextConfig;
