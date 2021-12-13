module.exports = {
  presets: ['next/babel'],
  plugins: [['styled-components', { ssr: true, pure: true }],'macros','preval'],
  ignore: ['node_modules']
};
