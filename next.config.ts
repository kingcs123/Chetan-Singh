import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/Chetan-Singh" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  allowedDevOrigins: ["192.168.1.101", "localhost", "127.0.0.1"],
};

export default nextConfig;
