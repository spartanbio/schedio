import { storiesOf } from '@storybook/vue'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import BaseRadio from '@/components/base/BaseRadio'

storiesOf('Components/BaseRadio', module)
  .addDecorator(withKnobs)
  .add('Radio', () => {
    const props = {
      radio1: {
        id: text('ID', 'radio-1', 'Required'),
        labelText: text('Label', 'Radio 1', 'Required'),
        isReversed: boolean('isReversed', false, 'Optional')
      },
      radio2: {
        id: text('ID', 'radio-2', 'Required'),
        labelText: text('Label', 'Radio 2', 'Required'),
        isReversed: boolean('isReversed', false, 'Optional')
      },
      radio3: {
        id: text('ID', 'radio-3', 'Required'),
        labelText: text('Label', 'Radio 3', 'Required'),
        isReversed: boolean('isReversed', false, 'Optional')
      }
    }

    return {
      render: h => (
        <form>
          <BaseRadio {...{ props: props.radio1 }}>{props.radio1.labelText}</BaseRadio>
          <BaseRadio {...{ props: props.radio2 }}>{props.radio2.labelText}</BaseRadio>
          <BaseRadio {...{ props: props.radio3 }}>{props.radio3.labelText}</BaseRadio>
        </form>
      )
    }
  })
