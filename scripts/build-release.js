const chalk = require('chalk')
const fs = require('fs-extra')
const path = require('path')
const shell = require('shelljs')

const buildLib = 'npx vue-cli-service build --target lib'
const destDir = 'dist/components'

console.log(chalk.yellow('Building main library bundle...\n'))
shell.exec('npm run build')

// Builds dist/components/<Component>/<Component>.common.js
// Then renames to dist/components/<Component>/index.js
console.log(chalk.yellow('Building individual component bundles...\n'))
const componentsDir = './src/components'

Promise.all(
  fs.readdirSync(componentsDir).map(async component => {
    const stat = await fs.stat(path.join(componentsDir, component))
    const dest = `${destDir}/${component}`
    const entry = `${componentsDir}/${component}/index.js`

    if (stat.isDirectory()) {
      console.log(chalk.yellow(`Building ${component}...`))
      // compile the component
      shell.exec(
        `${buildLib} --silent --formats commonjs --dest ${dest} --name ${component} ${entry}`
      )
      // Rename for import
      shell.exec(`mv ${dest}/${component}.common.js ${dest}/index.js`)
    }
  })
)
  .then(() => console.log(chalk.green('Library successfully built for release!')))
  .catch(err => console.error(chalk.red(err)))
