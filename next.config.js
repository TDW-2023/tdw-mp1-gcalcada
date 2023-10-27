/** @type {import('next').NextConfig} */

module.exports = {
  output: 'out',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: '/',
  target: 'server',
}


