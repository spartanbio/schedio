module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@vue/standard',
    'plugin:prettier/recommended',
    'plugin:vue/strongly-recommended'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: false }],
    semi: [2, 'never'],
    'no-console': 'off',
    'no-debugger': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
