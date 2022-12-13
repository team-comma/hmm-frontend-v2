/* eslint-disable */
/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@comma/ds']);

const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['tsx'],
};

module.exports = withPlugins([
  withTM({
    nextConfig,
  }),
]);
