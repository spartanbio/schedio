/* eslint-disable import/no-extraneous-dependencies */
import Schedio from '@'
import { addDecorator, addParameters, configure } from '@storybook/vue'
import { withTests } from '@storybook/addon-jest'
import { withKnobs } from '@storybook/addon-knobs'
// a11y must be imported after storybook prior to @storybook/vue@5.1.1
import { withA11y } from '@storybook/addon-a11y'
import { create } from '@storybook/theming'
import Vue from 'vue'
import results from '../../.jest-test-results.json'
import StoryContainer from '@@/docs/components/StoryContainer.vue'

Vue.use(Schedio)

const docStories = require.context('@@/docs', true, /.stories.(js|jsx)$/)
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
addDecorator(withA11y)
addDecorator(withTests({ results }))
addDecorator(story => ({
  name: 'TheStory',
  components: { StoryContainer, story },
  template: `\
<StoryContainer>
  <story />
</StoryContainer>
`
}))

configure(loadStories, module)
