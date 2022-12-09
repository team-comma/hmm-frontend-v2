/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
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
