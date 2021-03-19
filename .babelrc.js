module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true, pure: true }],
    ['import', { libraryName: 'antd', style: true }, 'antd'],
    [
      'import',
      {
        libraryName: '@ant-design/icons',
        camel2DashComponentName: false
      },
      '@ant-design/icons'
    ]
  ],
  ignore: ['node_modules']
};
