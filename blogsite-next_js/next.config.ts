import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.dummyjson.com'],
  },
  env: {
    BASE_URL: process.env.BASE_URL
  }
};

export default nextConfig;
