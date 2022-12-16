/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  pageExtensions: ['tsx'],
  experimental: {
    transpilePackages: ['@comma/ds'],
  },
};

module.exports = nextConfig;
