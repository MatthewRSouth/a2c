import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/私たちについて", destination: "/about" },
      { source: "/サービス", destination: "/services" },
      { source: "/お問合せ", destination: "/contact" },
    ];
  },
};

export default nextConfig;
