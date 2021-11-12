const withPlugins = require('next-compose-plugins');
const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
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
