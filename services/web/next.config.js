/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  pageExtensions: ['tsx', 'api.ts'],
  experimental: {
    transpilePackages: ['@comma/ds'],
  },
};

module.exports = nextConfig;
