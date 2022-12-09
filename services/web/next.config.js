/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@comma/ds']);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['tsx'],
};

module.exports = withTM({
  nextConfig,
});
