/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        port: '',
        pathname: '/api/character/avatar/**',
      },
    ],
    // domains:[
    //   'https://rickandmortyapi.com'
    // ]
  }
}

module.exports = nextConfig
