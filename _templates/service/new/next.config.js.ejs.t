---
to: services/<%= name %>/next.config.js
---
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['tsx'],
}

module.exports = nextConfig
