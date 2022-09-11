/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/over9',
  images: {
    loader: 'imgix',
    path: '/',
  },
};

module.exports = nextConfig;
