const path = require('path')
const sharedConf = require('../shared-webpack-conf')

module.exports = {
  stories: [
    '../../docs/**/*.stories.(js|jsx)',
    '../../src/components/**/*.stories.(js|jsx)',
  ],
  presets: [
    '@storybook/addon-docs/preset',
  ],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-jest',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
  ],
  webpack: (config) => {
    const rules = config.module.rules

    rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
          },
        },
        {
          loader: 'style-resources-loader',
          options: sharedConf.styleResourcesLoaderOptions,
        },
      ],
      include: [
        path.resolve(__dirname, '../../src'),
        path.resolve(__dirname, '../../docs'),
      ],
    })

    Object.assign(config.resolve.alias, sharedConf.aliases)
    config.parallelism = 1

    return config
  },
}
