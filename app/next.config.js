/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
//  distDir: 'build',
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
/*   webpack: (config, { isServer }) => {
    if (isServer) {
      require('./lib/generate-sitemap')
    }

    return config
  }, */
}

module.exports = nextConfig
