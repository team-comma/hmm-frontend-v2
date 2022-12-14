/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['tsx'],
  experimental: {
    transpilePackages: ['@comma/ds'],
  },
};

module.exports = nextConfig;
