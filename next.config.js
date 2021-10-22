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
  images: {
    domains: [
      'gateway.pinata.cloud',
      'staging-flow-bucket.s3-us-west-1.amazonaws.com',
      'i.picsum.photos',
      'btco.mypinata.cloud',
      //TODO: Remove it
      'pbs.twimg.com',
      'gateway.ipfs.io'
    ]
  }
};

module.exports = withPlugins([], nextConfig);
