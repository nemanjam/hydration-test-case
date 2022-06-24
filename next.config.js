/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    runtime: 'nodejs',
    serverComponents: true,
    reactRoot: true,
  },
};
