import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import { allowed as options } from '@/components/base/BaseInput/options'
import BaseInput from '@/components/base/BaseInput'

storiesOf('Components/BaseInput', module)
  .addDecorator(withKnobs)
  .add('Input', () => {
    const id = text('ID', 'base-input', 'Required')
    const name = text('name', 'base-input', 'Required')
    const placeholder = text('Placeholder', 'Placeholder text', 'Required')
    const labelText = text('Label', 'Label text', 'Required')
    const type = select('Input type', options, '', 'Optional')
    const isDisabled = boolean('isDisabled', false, 'Optional')
    const isInline = boolean('isInline', false, 'Optional')
    const isFullwidth = boolean('isFullwidth', false, 'Optional')

    const props = {
      id,
      name,
      labelText,
      type,
      isInline,
      isFullwidth,
      placeholder
    }

    return {
      render: h => (
        <BaseInput {...{ props }} disabled={isDisabled}>
          {labelText}
        </BaseInput>
      )
    }
  })
