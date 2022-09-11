/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/over9',
  images: {
    unoptimized: true,
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
