const globImporter = require('node-sass-glob-importer')
const path = require('path')
const sharedConf = require('../shared-webpack-conf')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          importer: globImporter()
        }
      },
      {
        loader: 'style-resources-loader',
        options: sharedConf.styleResourcesLoaderOptions
      }
    ],
    include: path.resolve(__dirname, '../../src')
  })

  defaultConfig.resolve.alias = sharedConf.aliases

  return defaultConfig
}
