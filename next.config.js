/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom"
  },
  basePath: '/portfolio',
}

module.exports = nextConfig
