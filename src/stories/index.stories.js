/* eslint-disable import/no-extraneous-dependencies */
import registerComponentsGlobally from '@/utils/register-components-globally'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import MyButton from '@/components/MyButton.vue'

import Typography from '@/components/Typography.vue'

// Automatically register base components
const baseComponents = require.context(
  '@/components/', // path to components
  false, // check subfolders?
  /Base[A-Z]\w+\.(vue|js)$/ // regex file name
)

registerComponentsGlobally(baseComponents)

// create stories
storiesOf('Design', module).add('Typography', () => ({
  components: { Typography },
  template: '<Typography />'
}))

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    render() {
      return <my-button onClick={this.action}>With JSX</my-button>
    },
    methods: { action: linkTo('Button', 'with some emoji') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') }
  }))
