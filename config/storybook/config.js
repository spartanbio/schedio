/* eslint-disable import/no-extraneous-dependencies */
import Schedio from '@/'
import { setOptions } from '@storybook/addon-options'
import { addDecorator, configure } from '@storybook/vue'
import Vue from 'vue'
import StorybookContainer from './StorybookContainer.vue'

Vue.use(Schedio)

const docStories = require.context('@/docs', true, /.stories.(js|jsx)$/)
const componentStories = require.context('@/components', true, /.stories.(js|jsx)$/)

function loadStories() {
  docStories.keys().forEach(filename => docStories(filename))
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
