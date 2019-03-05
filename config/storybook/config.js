/* eslint-disable import/no-extraneous-dependencies */
import Schedio from '@'
import { create } from '@storybook/theming'
import { addDecorator, addParameters, configure } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

Vue.use(Schedio)

const docStories = require.context('@/docs', true, /.stories.(js|jsx)$/)
const componentStories = require.context('@/components', true, /.stories.(js|jsx)$/)

function loadStories() {
  docStories.keys().forEach(filename => docStories(filename))
  componentStories.keys().forEach(filename => componentStories(filename))
}

// Set options
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Schédio',
      brandImage: null
    }),
    hierarchySeparator: /\./,
    hierarchyRootSeparator: /\//,
    sortStoriesByKind: true,
    showPanel: true
  }
})

addDecorator(withKnobs)

configure(loadStories, module)
