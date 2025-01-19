/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'crests.football-data.org',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/*/**',
      },
      {
        protocol: 'https',
        hostname: 'media.npr.org',
        port: '',
        pathname: '/*/**',
      },
      {
        protocol: 'https',
        hostname: 'ichef.bbci.co.uk',
        port: '',
        pathname: '/*/**',
      },
      {
        protocol: 'https',
        hostname: 'www.cnet.com',
        port: '',
        pathname: '/*/**',
      },
      {
        protocol: 'https',
        hostname: 'venturebeat.com',
        port: '',
        pathname: '/*/**',
      },
      {
        protocol: 'https',
        hostname: 'i.kinja-img.com',
        port: '',
        pathname: '/*/**',
      },
      {
        protocol: 'https',
        hostname: 'i.insider.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
}

module.exports = nextConfig
