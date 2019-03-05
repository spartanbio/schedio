const path = require('path')
const sharedConf = require('../shared-webpack-conf')

module.exports = ({ config, mode }) => {
  config.module.rules.push({
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

  Object.assign(config.resolve.alias, sharedConf.aliases)

  return config
}
