const path = require('path')
const sharedConf = require('../shared-webpack-conf')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'postcss-loader',
      'sass-loader',
      {
        loader: 'style-resources-loader',
        options: sharedConf.styleResourcesLoaderOptions
      }
    ],
    include: path.resolve(__dirname, '../../src')
  })

  Object.assign(defaultConfig.resolve.alias, sharedConf.aliases)

  return defaultConfig
}
