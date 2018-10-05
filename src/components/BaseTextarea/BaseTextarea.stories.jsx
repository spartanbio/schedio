import { boolean, number, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import BaseTextarea from '@/components//BaseTextarea'

storiesOf('Base Components/BaseTextarea', module)
  .addDecorator(withKnobs)
  .add('Textarea', () => {
    const numberOfRows = number('Rows (default: 10)', 10, {}, 'Optional')
    const isDisabled = boolean('isDisabled', false, 'Optional')
    const props = {
      id: text('ID', 'base-textarea', 'Required'),
      name: text('Name', 'base-textarea', 'Required'),
      placeholder: text('Placeholder', 'Placeholder text', 'Required'),
      isInline: boolean('isInline', false, 'Optional'),
      label: text('Label', 'Label text', 'Required')
    }

    return {
      render: h => <BaseTextarea {...{ props }} disabled={isDisabled} rows={numberOfRows} />
    }
  })
