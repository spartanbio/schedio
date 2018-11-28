module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    node: true
  },
  extends: ['@vue/standard', 'plugin:prettier/recommended', 'plugin:vue/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        printWidth: 100
      }
    ],
    semi: [2, 'never'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
