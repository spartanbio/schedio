const path = require('path')

exports.styleResourcesLoaderOptions = {
  patterns: [
    path.resolve(__dirname, '../src/assets/styles/tokens/dist/*.scss'),
    path.resolve(__dirname, '../src/assets/styles/**/*.scss'),
  ],
}

const srcPath = path.resolve(__dirname, '../src')
const rootPath = path.resolve(__dirname, '../')

exports.aliases = {
  '@': srcPath,
  '~': srcPath,
  '@@': rootPath,
  '~~': rootPath,
  // reduces bundle size by ~100k
  'core-js-pure': 'core-js',
}
