/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  i18n: {
    locales: ['default', 'en', 'cn'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  trailingSlash: true,
}