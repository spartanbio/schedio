const sharedConf = require('./config/shared-webpack-conf')

module.exports = {
  productionSourceMap: false,
  lintOnSave: true,
  pluginOptions: {
    stylelint: {
      formatter: () => require('prettier'),
    },
    'style-resources-loader': sharedConf.styleResourcesLoaderOptions,
  },
  css: {
    extract: true,
  },
  configureWebpack: {
    resolve: {
      alias: sharedConf.aliases,
    },
  },
}
