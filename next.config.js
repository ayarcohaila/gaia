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
  images: {
    domains: [
      'gateway.pinata.cloud',
      'staging-flow-bucket.s3-us-west-1.amazonaws.com',
      'i.picsum.photos',
      'btco.mypinata.cloud',
      //TODO: Remove it
      'pbs.twimg.com'
    ]
  }
};

module.exports = withPlugins([[antdConfig]], nextConfig);
