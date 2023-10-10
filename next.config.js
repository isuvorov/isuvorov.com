/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // https://github.com/gregrickaby/nextjs-github-pages
  output: 'export',
  basePath: '/github-pages',
  images: {
    unoptimized: true,
  },
  ///
};

module.exports = nextConfig;
