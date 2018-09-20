import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import BaseLabel from '@/components/base/BaseLabel'

storiesOf('Base Components/BaseLabel', module)
  .addDecorator(withKnobs)
  .add('Label', () => {
    const props = {
      label: text('Label text', 'Label text', 'Required'),
      isFullwidth: boolean('isFullwidth', false, 'Optional'),
      isInline: boolean('isInline', false, 'Optional'),
      isReversed: boolean('isReversed', false, 'Optional')
    }

    return {
      render: h => <BaseLabel {...{ props }} />
    }
  })
