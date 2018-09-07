import { storiesOf } from '@storybook/vue'
import { withKnobs, select, boolean } from '@storybook/addon-knobs'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

// Global registration doesn't work with `jsx` templates
import BaseHeading from '@/components/base/BaseHeading.vue'

storiesOf('Components/BaseHeading', module)
  .addDecorator(withKnobs)
  .add('Headings', () => {
    const headingLevel = select('Heading Level', [1, 2, 3], '1')

    return {
      render() {
        return (
          <BaseHeading level={headingLevel}>
            Heading Level {headingLevel}
          </BaseHeading>
        )
      }
    }
  })
  .add('Display', () => {
    const displayLevel = select('Display Level', [1, 2], '1')
    const isUppercase = boolean('Uppercase', true)

    return {
      render() {
        return (
          <BaseHeading
            level={displayLevel}
            isDisplay
            class={isUppercase && 'uppercase'}
          >
            Display Level {displayLevel}
          </BaseHeading>
        )
      }
    }
  })
