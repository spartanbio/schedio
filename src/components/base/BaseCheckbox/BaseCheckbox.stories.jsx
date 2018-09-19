import { storiesOf } from '@storybook/vue'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import BaseCheckbox from '@/components/base/BaseCheckbox'

storiesOf('Components/BaseCheckbox', module)
  .addDecorator(withKnobs)
  .add('Checkbox', () => {
    const id = text('ID', 'base-checkbox', 'Required')
    const name = text('ID', 'base-checkbox', 'Required')
    const labelText = text('Label', 'Label text', 'Required')
    const isReversed = boolean('isReversed', false, 'Optional')
    const isDisabled = boolean('isDisabled', false, 'Optional')

    const props = {
      id,
      labelText,
      isReversed,
      name,
      value: 'label text'
    }

    return {
      render: h => (
        <div>
          <BaseCheckbox {...{ props }} disabled={isDisabled}>
            {labelText}
          </BaseCheckbox>
        </div>
      )
    }
  })
