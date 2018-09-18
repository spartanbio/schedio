import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import BaseTextarea from '@/components/base/BaseTextarea'

storiesOf('Components/BaseTextarea', module)
  .addDecorator(withKnobs)
  .add('Textarea', () => {
    const id = text('ID', 'base-textarea', 'Required')
    const name = text('name', 'base-textarea', 'Required')
    const placeholder = text('Placeholder', 'Placeholder text', 'Required')
    const labelText = text('Label', 'Label text', 'Required')
    const isDisabled = boolean('isDisabled', false, 'Optional')
    const isInline = boolean('isInline', false, 'Optional')

    const props = {
      id,
      name,
      labelText,
      isInline,
      placeholder
    }

    return {
      render: h => (
        <BaseTextarea {...{ props }} disabled={isDisabled}>
          {labelText}
        </BaseTextarea>
      )
    }
  })
