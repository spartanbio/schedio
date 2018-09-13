import { storiesOf } from '@storybook/vue'
import { withKnobs, select, boolean } from '@storybook/addon-knobs'

// Global registration doesn't work with `jsx` templates
import BaseHeading from '@/components/base/BaseHeading.vue'

storiesOf('Components/BaseHeading', module)
  .addDecorator(withKnobs)
  .add('Headings', () => {
    const headingLevel = select('Heading Level', [1, 2, 3], '1')
    const isSubtle = boolean('Subtle', false)

    return {
      render() {
        return (
          <BaseHeading level={headingLevel} isSubtle={isSubtle}>
            Heading Level {headingLevel}
          </BaseHeading>
        )
      }
    }
  })
  .add('Display', () => {
    const displayLevel = select('Display Level', [1, 2], '1')
    const isSubtle = boolean('Subtle', false)
    const isUppercase = boolean('Uppercase', true)

    return {
      render() {
        return (
          <BaseHeading level={displayLevel} isDisplay isSubtle={isSubtle} isUppercase={isUppercase}>
            Display Level {displayLevel}
          </BaseHeading>
        )
      }
    }
  })
