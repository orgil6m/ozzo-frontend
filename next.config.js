/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   env: {
    API_URL: process.env.API_URL,
  },
  "presets": ["next/babel"],
  i18n: {
    locales: ['mn', 'en', 'cn'],
    defaultLocale: 'mn',
    localeDetection: false,
  },
  trailingSlash: true,
}

module.exports = nextConfig