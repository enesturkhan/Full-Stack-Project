/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.apple.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "www.logitech.com",
      },
      {
        protocol: "https",
        hostname: "resource.logitech.com",
      },
      {
        protocol: "https",
        hostname: "store.storeimages.cdn-apple.com",
      },
    ],
  },
};

module.exports = nextConfig;
