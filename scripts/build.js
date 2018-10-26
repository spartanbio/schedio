const shell = require('shelljs')

// shell.exec(
//   'vue-cli-service build --target lib --dest ./node_modules/schedio-design/dist ./node_modules/schedio-design/src/index.js'
// )
shell.exec('vue-cli-service build --target lib src/index.js')
