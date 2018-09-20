/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options'
import registerComponentsGlobally from '@/utils/register-components-globally'
import StorybookContainer from './StorybookContainer.vue'

import '@/assets/styles.scss'

// Automatically register base components
const baseComponents = require.context(
  '@/components/', // path to components
  true, // check subfolders?
  /Base[A-Z]\w+\.(vue|js)$/ // regex file name
)

registerComponentsGlobally(baseComponents)

const genericStories = require.context('@/stories', true, /.stories.(js|jsx)$/)
const componentStories = require.context('@/components', true, /.stories.(js|jsx)$/)

function loadStories() {
  genericStories.keys().forEach(filename => genericStories(filename))
  componentStories.keys().forEach(filename => componentStories(filename))
}

// Set options
setOptions({
  name: 'Schédio',
  hierarchySeparator: /\./,
  hierarchyRootSeparator: /\//,
  sortStoriesByKind: true
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
