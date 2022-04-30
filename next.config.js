/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
}

module.exports = nextConfig
module.exports = {
  "presets": ["next/babel"],
  i18n: {
    locales: ['mn', 'en', 'cn'],
    defaultLocale: 'mn',
    localeDetection: false,
  },
  
  
  trailingSlash: true,
  
}