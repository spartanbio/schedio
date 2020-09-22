import Schedio from '@';
import results from '@@/.jest-test-results.json';
import StoryContainer from '@@/docs/components/StoryContainer.vue';
import '@@/static/fonts/fonts.css';
import { withTests } from '@storybook/addon-jest';
import { addDecorator, addParameters } from '@storybook/vue';
import Vue from 'vue';

Vue.use(Schedio);

// Set options
addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
});

addDecorator(withTests({ results }));
addDecorator(story => ({
  name: 'TheStory',
  components: { StoryContainer, story },
  template: `\
<StoryContainer>
  <story />
</StoryContainer>
`,
}));
