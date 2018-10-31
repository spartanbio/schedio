const fs = require('fs-extra')
const path = require('path')
const shell = require('shelljs')
const buildLib = 'vue-cli-service build --target lib'
const destDir = 'dist/components'

// Build the complete bundle
shell.exec(`${buildLib} src/index.js`)

// Builds dist/components/<Component>/<Component>.common.js
// Then renames to dist/components/<Component>/index.js
const componentsDir = './src/components'
Promise.all(
  fs.readdirSync(componentsDir).map(async component => {
    const stat = await fs.stat(path.join(componentsDir, component))
    const dest = `${destDir}/${component}`
    const entry = `${componentsDir}/${component}/index.js`

    if (stat.isDirectory()) {
      // compile the component
      shell.exec(`${buildLib} --dest ${dest} --name ${component} ${entry}`)
      // Rename for import
      shell.exec(`mv ${dest}/${component}.common.js ${dest}/index.js`)
    }
  })
).catch(console.error)
