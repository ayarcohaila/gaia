const withPlugins = require('next-compose-plugins');
const { withSentryConfig } = require('@sentry/nextjs');
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const isProduction = process.env.NODE_ENV === 'production';

// Reference: https://nextjs.org/docs/advanced-features/security-headers
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ];
  },
  images: {
    domains: ['images.ongaia.com', 'https://images.ongaia.com/ipfs', 'assets.nflallday.com']
  }
};

const pwaConfig = {
  pwa: {
    dest: 'public',
    disable: !isProduction
  }
};

const sentryWebpackPluginOptions = {
  include: '.',
  ignore: ['node_modules'],
  silent: true
};

module.exports = withSentryConfig(
  withPlugins([[withPWA, pwaConfig], [withBundleAnalyzer]], nextConfig),
  sentryWebpackPluginOptions
);
