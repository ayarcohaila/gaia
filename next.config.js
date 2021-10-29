const withPlugins = require('next-compose-plugins');

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ballerz',
        permanent: true
      }
    ];
  },
  webpack5: true,
  webpack: config => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false
    };

    return config;
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
      'ipfs.fleek.co'
    ]
  }
};

module.exports = withPlugins([], nextConfig);
