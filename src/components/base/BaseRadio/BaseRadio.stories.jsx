import { storiesOf } from '@storybook/vue'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import BaseRadio from '@/components/base/BaseRadio'

storiesOf('Base Components/BaseRadio', module)
  .addDecorator(withKnobs)
  .add('Radio', () => {
    const name = text('Name', 'radio-group', 'Required')
    const radios = [
      {
        id: text('ID', 'radio-1', 'Required'),
        label: text('Label', 'Radio 1', 'Required'),
        isReversed: boolean('isReversed', false, 'Optional'),
        isDisabled: boolean('Radio 1 Disabled', false, 'Optional'),
        name,
        value: 'radio 1'
      },
      {
        id: text('ID', 'radio-2', 'Required'),
        label: text('Label', 'Radio 2', 'Required'),
        isReversed: boolean('isReversed', false, 'Optional'),
        isDisabled: boolean('Radio 2 Disabled', false, 'Optional'),
        name,
        value: 'radio 2'
      },
      {
        id: text('ID', 'radio-3', 'Required'),
        label: text('Label', 'Radio 3', 'Required'),
        isReversed: boolean('isReversed', false, 'Optional'),
        isDisabled: boolean('Radio 3 Disabled', false, 'Optional'),
        name,
        value: 'radio 3'
      }
    ]

    return {
      render: h => (
        <div>
          {radios.map(radio => (
            <BaseRadio {...{ props: radio }} disabled={radio.isDisabled} value={radio.value} />
          ))}
        </div>
      )
    }
  })
