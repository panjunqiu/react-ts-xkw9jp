/**
 * umijs插件配置
 */

export default {
  plugins: [
    '@umijs/plugins/dist/antd',
    '@umijs/plugins/dist/dva',
    '@umijs/plugins/dist/request',
  ],
  antd: {
    // configProvider
    configProvider: {},
    // themes
    dark: false,
    compact: true,
    // babel-plugin-import
    import: true,
    // less or css, default less
    style: 'less',
  },
  dva: {
    immer: {
      enableES5: true,
      enableAllPlugins: true,
    },
  },
  request: {
    dataField: 'data',
  },
};
