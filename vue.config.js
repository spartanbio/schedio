const { aliases, styleResourcesLoaderOptions } = require('./config/shared-webpack-conf')

module.exports = {
  productionSourceMap: false,
  lintOnSave: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: styleResourcesLoaderOptions.patterns,
    },
  },
  css: {
    extract: true,
  },
  configureWebpack: {
    resolve: {
      alias: aliases,
    },
  },
}
