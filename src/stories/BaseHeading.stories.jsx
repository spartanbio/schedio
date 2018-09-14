// Global registration doesn't work with `jsx` templates
import { boolean, radios, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import BaseHeading from '@/components/base/BaseHeading.vue'

storiesOf('Components/BaseHeading', module)
  .addDecorator(withKnobs)
  .add('Headings', () => {
    const level = select('level', [1, 2, 3], '1', 'Required')
    const slotContent = text('Slot content', '{{ Slot content }}', 'Required')
    const isSubtle = boolean('is-subtle', false, 'Optional')

    const props = {
      level,
      isSubtle
    }

    return {
      render: h => (
        <BaseHeading {...{ props }}>
          <p>Heading Level {level}</p>
          <p>{slotContent}</p>
        </BaseHeading>
      )
    }
  })
  .add('Display', () => {
    const level = select('level', [1, 2], '1', 'Required')
    const isDisplay = boolean('is-display', true, 'Required')
    const slotContent = text('Slot content', '{{ Slot content }}', 'Required')
    const options = radios(
      'Pick one',
      ['Default', 'is-uppercase', 'is-subtle'],
      'Default',
      'Optional'
    )

    const props = {
      level,
      isDisplay,
      isUppercase: options === 'is-uppercase',
      isSubtle: options === 'is-subtle'
    }

    return {
      render: h => (
        <BaseHeading {...{ props }}>
          <p>Display Level {level}</p>
          <p>{slotContent}</p>
        </BaseHeading>
      )
    }
  })
