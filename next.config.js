/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'coin-images.coingecko.com',  // Add CoinGecko domain
      'assets.coingecko.com'        // Also add this if you're using it
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 