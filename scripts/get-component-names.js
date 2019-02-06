const path = require('path')
const fs = require('fs-extra')

module.exports = function getComponentNames() {
  const srcDir = path.resolve(__dirname, '../src/components')
  const componentNames = fs.readdirSync(srcDir).filter(name => {
    const componentDir = path.resolve(srcDir, name)
    const isDirectory = fs.statSync(componentDir).isDirectory()
    const hasVueComponent = fs.existsSync(path.resolve(componentDir, `${name}.vue`))

    return isDirectory && hasVueComponent
  })

  return componentNames
}
