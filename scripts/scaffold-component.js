const addUnitTest = require('./add-unit-test')
const chalk = require('chalk')
const fs = require('fs-extra')
const path = require('path')

// params
const componentName = process.argv[2]
const listFile = path.resolve(__dirname, '../src', 'components', 'index.js')
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
    contents: `<template>
  <div>
    <!-- component content -->
  </div>
</template>

<script>
export default {
  name: '${componentName}'
}
</script>\n`
  },
  // Storybook story
  {
    extension: 'stories.jsx',
    contents: `import { ${componentName} } from '@/components/${componentName}'
import { SHeading } from '@/components/SHeading'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/${componentName}', module)
  .addDecorator(withKnobs)
  .add('${componentName}', () => {
    return {
      render(h) {
        return (
          <StoryContainer>
            <SHeading level="1">${componentName}</SHeading>
            <p>Describe the component here</p>

            <SHeading level="2">Example</SHeading>
            <${componentName} />

            {${componentName}.props && <PropList component={${componentName}} />}
          </StoryContainer>
        )
      }
    }
  })\n`
  },
  // SCSS
  {
    extension: 'scss',
    contents: '// component styles\n'
  },
  // index.js
  {
    fileName: 'index',
    extension: 'js',
    contents: `import ${componentName} from './${componentName}.vue'

export { ${componentName} }

export default {
  install: Vue => Vue.component(${componentName}.name, ${componentName})
}\n`
  }
]

// set up promises
const generateComponentFiles = scaffold.map(({ fileName, extension, contents }) => {
  const file = path.resolve(writeDir, `${fileName || componentName}.${extension}`)

  return fs.outputFile(file, contents)
})

const updateComponentList = async () => {
  // add component export to @/components/index.js
  const output = Buffer.concat([
    await fs.readFile(listFile),
    Buffer.from(`export { default as ${componentName} } from '@/components/${componentName}'\n`)
  ])
  fs.outputFile(listFile, output)
}

// write files
Promise.all([...generateComponentFiles, updateComponentList()])
  .then(() => addUnitTest(componentName))
  .then(() => console.log(chalk.green(`Successfully scaffolded component \`${componentName}\``)))
  .catch(err => console.error(chalk.red(err)))
