const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['motionfold'],
  webpack: (config) => {
    config.resolve.alias['motionfold'] = path.resolve(
      __dirname,
      'node_modules/motionfold/src/demo-components.tsx'
    )
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig
