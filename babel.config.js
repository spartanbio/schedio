module.exports = (api) => {
  api.cache(true)

  return {
    presets: ['@vue/app'],
    plugins: ['@babel/plugin-transform-runtime'],
  }
}
