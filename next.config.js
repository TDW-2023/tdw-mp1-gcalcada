/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  target: 'server',
}

module.exports = nextConfig