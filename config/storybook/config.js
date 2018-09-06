/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue'
import registerComponentsGlobally from '@/utils/register-components-globally'

import '@/assets/styles.scss'

// Automatically register base components
const baseComponents = require.context(
  '@/components/base', // path to components
  false, // check subfolders?
  /Base[A-Z]\w+\.(vue|js)$/ // regex file name
)

registerComponentsGlobally(baseComponents)

const req = require.context('@/stories', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
