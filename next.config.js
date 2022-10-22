const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? "/css-arts/" : "",
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
