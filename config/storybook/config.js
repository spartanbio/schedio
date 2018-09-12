/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options'
import registerComponentsGlobally from '@/utils/register-components-globally'
import StorybookContainer from './StorybookContainer.vue'

import '@/assets/styles.scss'

// Automatically register base components
const baseComponents = require.context(
  '@/components/base', // path to components
  false, // check subfolders?
  /Base[A-Z]\w+\.(vue|js)$/ // regex file name
)

registerComponentsGlobally(baseComponents)

const req = require.context('@/stories', true, /.stories.(js|jsx)$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// Set options
setOptions({
  name: 'Schédio',
  hierarchySeparator: /\./,
  hierarchyRootSeparator: /\//
})

addDecorator(() => ({
  // TODO: remove duplicate container
  render() {
    return (
      <StorybookContainer>
        <story />
      </StorybookContainer>
    )
  }
}))

configure(loadStories, module)
