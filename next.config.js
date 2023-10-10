const isDev = process.env.NODE_ENV !== 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // https://github.com/gregrickaby/nextjs-github-pages
  output: isDev ? 'standalone' : 'export',
  basePath: isDev ? undefined : '/github-pages',
  images: {
    unoptimized: true,
  },
  ///
};

module.exports = nextConfig;
