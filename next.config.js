/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  i18n: {
    locales: ["mn", "en", "cn"],
    defaultLocale: "mn",
    localeDetection: false,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
