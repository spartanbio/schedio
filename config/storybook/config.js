/* eslint-disable import/no-extraneous-dependencies */
import Schedio from '@'
import { checkA11y } from '@storybook/addon-a11y'
import { withOptions } from '@storybook/addon-options'
import { addDecorator, configure } from '@storybook/vue'
import Vue from 'vue'

Vue.use(Schedio)

const docStories = require.context('@/docs', true, /.stories.(js|jsx)$/)
const componentStories = require.context('@/components', true, /.stories.(js|jsx)$/)

function loadStories() {
  docStories.keys().forEach(filename => docStories(filename))
  componentStories.keys().forEach(filename => componentStories(filename))
}

// Set options
addDecorator(
  withOptions({
    name: 'Schédio',
    hierarchySeparator: /\./,
    hierarchyRootSeparator: /\//,
    sortStoriesByKind: true
  })
)

addDecorator(checkA11y)

configure(loadStories, module)
