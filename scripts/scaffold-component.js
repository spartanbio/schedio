const chalk = require('chalk')
const fs = require('fs-extra')
const path = require('path')

// params
const componentName = process.argv[2]
const isBaseComponent = /^Base[A-Z]\w+/.test(componentName)
const componentType = isBaseComponent ? 'Base Components' : 'Components'
const writeDir = path.resolve(__dirname, '../src', 'components', componentName)

// don't overwrite existing components
if (fs.pathExistsSync(path.resolve(writeDir, `${componentName}.vue`))) {
  return console.log(chalk.red(`\`${componentName}\` already exists!`))
}

// files and contents to write
const scaffold = [
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
  {
    extension: 'stories.jsx',
    contents: `import ${componentName} from '@/components/${componentName}'
import BaseHeading from '@/components/BaseHeading'
import PropList from '@/components/_docs/PropList'
import StoryContainer from '@/components/_docs/StoryContainer'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('${componentType}/${componentName}', module)
  .addDecorator(withKnobs)
  .add('${componentName}', () => {
    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">${componentName.replace(/^Base/, '')}</BaseHeading>
          <p>Descibe the component here</p>

          <BaseHeading level="2">Example</BaseHeading>
          <${componentName} />

          <PropList component={${componentName}} />
        </StoryContainer>
      )
    }
  })\n`
  },
  {
    extension: 'scss',
    contents: '// component styles\n'
  },
  {
    fileName: 'index',
    extension: 'js',
    contents: `export { default } from './${componentName}.vue'\n`
  }
]

// set up promises
const outputFiles = scaffold.map(({ fileName, extension, contents }) => {
  const file = path.resolve(writeDir, `${fileName || componentName}.${extension}`)
  fs.outputFile(file, contents)
})

// write files
Promise.all(outputFiles)
  .then(() => console.log(chalk.green(`Successfully scaffolded component \`${componentName}\``)))
  .catch(err => console.error(chalk.red(err)))
