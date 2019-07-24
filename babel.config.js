module.exports = (api) => {
  api.cache(true)

  return {
    presets: ['@vue/app', '@babel/preset-env'],
    plugins: ['transform-vue-jsx', '@babel/plugin-transform-runtime'],
  }
}
