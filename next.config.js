const withPlugins = require('next-compose-plugins');
const { withSentryConfig } = require('@sentry/nextjs');

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
        headers: securityHeaders,
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ballerz',
        permanent: true
      }
    ];
  },
  images: {
    domains: [
      'gateway.pinata.cloud',
      'staging-flow-bucket.s3-us-west-1.amazonaws.com',
      'i.picsum.photos',
      'btco.mypinata.cloud',
      //TODO: Remove it
      'pbs.twimg.com',
      'gateway.ipfs.io',
      'ipfs.fleek.co',
      'images.ongaia.com',
      'https://images.ongaia.com/ipfs'
    ]
  }
};

const sentryWebpackPluginOptions = {
  include: '.',
  ignore: ['node_modules'],
  silent: true
};

module.exports = withSentryConfig(withPlugins([], nextConfig), sentryWebpackPluginOptions);
