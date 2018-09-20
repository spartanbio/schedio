import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import BaseContainer from '@/components/BaseContainer'

storiesOf('Base Components/BaseContainer', module)
  .addDecorator(withKnobs)
  .add('BaseContainer', () => {
    return {
      render: h => <BaseContainer />
    }
  })
