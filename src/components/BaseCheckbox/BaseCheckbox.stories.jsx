import BaseCheckbox from '@/components/BaseCheckbox'
import BaseHeading from '@/components/BaseHeading'
import { withAttrsAsProps, withUnboundAttrs } from '@/components/mixins/stories/form-fields'
import PropList from '@/components/_docs/PropList'
import StoryContainer from '@/components/_docs/StoryContainer'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Base Components/BaseCheckbox', module)
  .addDecorator(withKnobs)
  .add('Checkbox', () => {
    const props = {
      ...withAttrsAsProps({ id: 'base-checkbox', name: 'base-checkbox', label: 'Base Checkbox' }),
      isReversed: boolean('isReversed', false, 'Optional Props')
    }

    const attrs = withUnboundAttrs({ value: 'base-checkbox' })

    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">Checkbox</BaseHeading>
          <p>
            Checkboxes provide the ability to make a range of selections (none, one, or multiple).
            They can also be used to provide consent, or indicate agreement.
          </p>

          <BaseHeading level="2">Example</BaseHeading>
          <BaseCheckbox {...{ props }} {...{ attrs }} />

          <PropList component={BaseCheckbox} />
        </StoryContainer>
      )
    }
  })
