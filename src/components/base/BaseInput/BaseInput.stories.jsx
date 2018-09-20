import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import { allowed as options } from '@/components/base/BaseInput/options'
import BaseInput from '@/components/base/BaseInput'

storiesOf('Base Components/BaseInput', module)
  .addDecorator(withKnobs)
  .add('Input', () => {
    const props = {
      id: text('ID', 'base-input', 'Required'),
      name: text('name', 'base-input', 'Required'),
      label: text('Label', 'Label text', 'Required'),
      placeholder: text('Placeholder', 'Placeholder text', 'Required'),
      type: select('Input type', options, '', 'Optional'),
      isInline: boolean('isInline', false, 'Optional'),
      isFullwidth: boolean('isFullwidth', false, 'Optional')
    }

    const isDisabled = boolean('isDisabled', false, 'Optional')

    return {
      render: h => <BaseInput {...{ props }} disabled={isDisabled} />
    }
  })
