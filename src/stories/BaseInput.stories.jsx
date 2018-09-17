import { select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import { allowed as options } from '@/components/base/BaseInput/options'
import BaseInput from '@/components/base/BaseInput'

storiesOf('Components/BaseInput', module)
  .addDecorator(withKnobs)
  .add('Input', () => {
    const id = text('ID', 'base-input', 'Required')
    const placeholderText = text('Placeholder', 'Placeholder text', 'Required')
    const labelText = text('Label', 'Label text', 'Required')
    const inputType = select('Input type', options, '', 'Optional')

    const props = {
      id,
      labelText,
      inputType,
      placeholderText
    }

    return {
      render: h => (
        <BaseInput id="text" {...{ props }}>
          {labelText}
        </BaseInput>
      )
    }
  })
