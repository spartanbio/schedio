const path = require('path');

exports.styleResourcesLoaderOptions = {
  patterns: [
    path.resolve(__dirname, '../node_modules/@spartanbio/schedio-tokens/dist/web/scss/**.scss'),
    path.resolve(__dirname, '../src/assets/styles/**/*.scss'),
  ],
};

const srcPath = path.resolve(__dirname, '../src');
const rootPath = path.resolve(__dirname, '../');

exports.aliases = {
  '@': srcPath,
  '~': srcPath,
  '@@': rootPath,
  '~~': rootPath,
  // reduces bundle size by ~100k
  'core-js-pure': 'core-js',
};
