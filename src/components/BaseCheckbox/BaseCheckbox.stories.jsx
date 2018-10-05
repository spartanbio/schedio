import { storiesOf } from '@storybook/vue'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import BaseCheckbox from '@/components//BaseCheckbox'

storiesOf('Base Components/BaseCheckbox', module)
  .addDecorator(withKnobs)
  .add('Checkbox', () => {
    const props = {
      id: text('ID', 'base-checkbox', 'Required'),
      name: text('Name', 'base-checkbox', 'Required'),
      value: text('Value', 'base-checkbox', 'Required'),
      label: text('Label', 'Checkbox', 'Required'),
      isReversed: boolean('isReversed', false, 'Optional')
    }
    const isDisabled = boolean('isDisabled', false, 'Optional')

    return {
      render: h => <BaseCheckbox {...{ props }} disabled={isDisabled} />
    }
  })
