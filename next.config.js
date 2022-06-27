/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src']
  },
  reactStrictMode: false,
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  }
}

module.exports = nextConfig
