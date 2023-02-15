/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'fakestoreapi.com'], //Domain of image host
  },
  env: {
    stripe_public_key: process.env.SRTRIPE_PUBLIC_KEY,
  },
};

module.exports = nextConfig;
