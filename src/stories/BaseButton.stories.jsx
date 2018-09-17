import { storiesOf } from '@storybook/vue'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { colors, sizes } from '@/components/base/BaseButton/options'
import BaseButton from '@/components/base/BaseButton'

storiesOf('Components/BaseButton', module)
  .addDecorator(withKnobs)
  .add('Button', () => {
    const buttonText = text('Button text', 'Sample text')
    const colorOptions = select('Button color', ['', ...colors])
    const sizeOptions = select('Button size', ['', ...sizes], '')

    return {
      render: h => (
        <BaseButton buttonColor={colorOptions} buttonSize={sizeOptions}>
          {buttonText}
        </BaseButton>
      )
    }
  })
