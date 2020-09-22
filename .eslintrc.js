module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: ['@spartanbio/eslint-config-vue'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-unused-vars': 'off',
    'no-shadow': 'off',
  },
};
