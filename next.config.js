/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['previews.123rf.com', 'res.cloudinary.com'], // Add the domains you want to allow images from
  },
}

module.exports = {
  favicon: "./public/favicon.ico",
};

module.exports = nextConfig
