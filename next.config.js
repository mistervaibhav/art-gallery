const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? "/art-gallery/" : "/",
  reactStrictMode: false,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
