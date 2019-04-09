const ase = require('ase-utils')
const chalk = require('chalk')
const fs = require('fs-extra')
const path = require('path')

const tokenDist = path.resolve(__dirname, '../src/assets/styles/tokens/dist/')
const props = require(path.join(tokenDist, 'tokens.ase.json'))
const propsBuffer = Buffer.from(ase.encode(props), 'utf8')

fs.outputFile(path.join(tokenDist, 'colors.ase'), propsBuffer)
  .then(() => console.log(chalk.green('ASE swatches written')))
  .catch(e => console.log(chalk.red(e)))
