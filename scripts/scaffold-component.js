const addUnitTest = require('./add-unit-test')
const chalk = require('chalk')
const fs = require('fs-extra')
const path = require('path')
const getComponentNames = require('./get-component-names')
const generateVueIndex = require('./generate-vue-index')

// params
const rawName = process.argv[2]
const componentName = `S${rawName}`
const writeDir = path.resolve(__dirname, '../src', 'components', componentName)

// don't overwrite existing components
if (fs.pathExistsSync(path.resolve(writeDir, `${componentName}.vue`))) {
  return console.log(chalk.red(`\`${componentName}\` already exists!`))
}

// files and contents to write
const scaffold = [
  // Vue component
  {
    extension: 'vue',
    contents: `\
<template>
  <div>
    <!-- component content -->
  </div>
</template>

<script>
export default {
  name: '${componentName}',
}
</script>

<style lang="scss">
// component styles
</style>
`,
  },
  // Storybook story
  {
    extension: 'stories.jsx',
    contents: `\
import { ${componentName} } from '@/components/${componentName}'
import { SHeading } from '@/components/SHeading'
import PropList from '@@/docs/components/PropList'

export default {
  title: 'Components/${componentName}',
  component: ${componentName},
  parameters: {
    jest: '${componentName}',
  }
}

export const ${rawName} = () => ({
  render (h) {
    return (
      <div>
        <SHeading>${rawName}</SHeading>
        <p>Describe the component here</p>

        <SHeading level="2">Example</SHeading>
        <${componentName} />

        {/* This doesn't work if props are only generated through a mixin */}
        {${componentName}.props && <PropList component={${componentName}} />}
      </div>
    )
  }
})

${rawName}.story = {
  name: '${rawName}',
}
`,
  },
  // index.js
  {
    fileName: 'index',
    extension: 'js',
    contents: `\
import ${componentName} from './${componentName}.vue'

export { ${componentName} }

export default {
  install: Vue => Vue.component(${componentName}.name, ${componentName}),
}
`,
  },
]

// write files
async function scaffoldComponent () {
  console.log(chalk.yellow(`Building ${componentName}...\n`))

  try {
    // add vue, story, index.js
    await Promise.all(
      scaffold.map(async ({ fileName, extension, contents }) => {
        console.log(chalk.yellow(`Adding ${extension} file...\n`))

        const file = path.resolve(writeDir, `${fileName || componentName}.${extension}`)

        return fs.outputFile(file, contents)
      })
    )

    // add unit test files
    console.log(chalk.yellow('Adding unit test...\n'))

    await addUnitTest(componentName)

    // Rebuild index.js and components.scss
    console.log(chalk.yellow('Rebuilding index files...\n'))

    const allComponentNames = getComponentNames()

    generateVueIndex(allComponentNames)

    // great success!
    console.log(chalk.green(`Successfully scaffolded component \`${componentName}\``))
  } catch (err) {
    console.error(chalk.red(err))
  }
}

scaffoldComponent()
