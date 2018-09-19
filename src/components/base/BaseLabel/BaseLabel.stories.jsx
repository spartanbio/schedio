import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import BaseLabel from '@/components/base/BaseLabel'

storiesOf('Components/BaseLabel', module)
  .addDecorator(withKnobs)
  .add('Label', () => {
    const labelText = text('Label text', 'Label text', 'Required')
    const props = {
      isFullwidth: boolean('isFullwidth', false, 'Optional'),
      isInline: boolean('isInline', false, 'Optional'),
      isReversed: boolean('isReversed', false, 'Optional')
    }

    return {
      render: h => <BaseLabel {...{ props }}>{labelText}</BaseLabel>
    }
  })
