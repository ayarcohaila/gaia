const withAntdLess = require('next-plugin-antd-less');
const antvars = require('./antvars');

module.exports = withAntdLess({
  modifyVars: antvars,

  reactStrictMode: true,
  poweredByHeader: false,

  webpack(config) {
    return config;
  }
});
