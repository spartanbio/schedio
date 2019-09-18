/* eslint-disable import/no-extraneous-dependencies */
import Schedio from '@'
import StoryContainer from '@@/docs/components/StoryContainer.vue'
import { withA11y } from '@storybook/addon-a11y'
import { withTests } from '@storybook/addon-jest'
import { withKnobs } from '@storybook/addon-knobs'
import { create } from '@storybook/theming'
import { addDecorator, addParameters, configure } from '@storybook/vue'
import Vue from 'vue'
import results from '@@/.jest-test-results.json'
import '@@/static/fonts/fonts.css'

Vue.use(Schedio)

const docStories = require.context('@@/docs', true, /.stories.(js|jsx)$/)
const componentStories = require.context('@/components', true, /.stories.(js|jsx|mdx)$/)

const prepLoad = stories => stories.keys().map(name => stories(name)).filter(exp => !!exp.default)

function loadStories () {
  return [
    ...prepLoad(docStories),
    ...prepLoad(componentStories),
  ]
}

// Set options
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Schédio',
      brandImage: null,
    }),
    hierarchySeparator: /\./,
    hierarchyRootSeparator: /\//,
    sortStoriesByKind: true,
    showPanel: true,
  },
  // TODO: remove once `@storybook/addon-docs` fully supports vue
  docs: { page: null },
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
`,
}))

configure(loadStories, module)
