const withAntdLess = require('next-plugin-antd-less');
const antvars = require('./antvars');
const withPlugins = require('next-compose-plugins');

const antdConfig = withAntdLess({
  modifyVars: antvars,

  reactStrictMode: true,
  poweredByHeader: false,

  webpack(config) {
    return config;
  }
});

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ballerz',
        permanent: true,
      },
    ]
  },
  images: {
    domains: [
      'gateway.pinata.cloud',
      'staging-flow-bucket.s3-us-west-1.amazonaws.com',
      'i.picsum.photos',
      'btco.mypinata.cloud'
    ]
  }
};

module.exports = withPlugins([[antdConfig]], nextConfig);