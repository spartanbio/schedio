import { storiesOf } from '@storybook/vue'
import { text, withKnobs } from '@storybook/addon-knobs'
import BaseButton from '@/components/base/BaseButton'

storiesOf('Components/BaseButton', module)
  .addDecorator(withKnobs)
  .add('Button', () => {
    const buttonText = text('Button text', 'I am a button')
    return {
      render: h => <BaseButton>{buttonText}</BaseButton>
    }
  })
