import BaseCheckbox from '@/components/BaseCheckbox'
import BaseHeading from '@/components/BaseHeading'
import PropList from '@/components/_docs/PropList'
import StoryContainer from '@/components/_docs/StoryContainer'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Base Components/BaseCheckbox', module)
  .addDecorator(withKnobs)
  .add('Checkbox', () => {
    const props = {
      id: text('ID', 'base-checkbox', 'Required'),
      name: text('Name', 'base-checkbox', 'Required'),
      value: text('Value', 'base-checkbox', 'Required'),
      label: text('Label', 'Checkbox', 'Required'),
      isReversed: boolean('isReversed', false, 'Optional')
    }
    const isDisabled = boolean('isDisabled', false, 'Optional')

    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">Checkbox</BaseHeading>
          <p>
            Checkboxes provide the ability to make a range of selections (none, one, or multiple).
            They can also be used to provide consent, or indicate agreement.
          </p>

          <BaseHeading level="2">Example</BaseHeading>
          <BaseCheckbox {...{ props }} disabled={isDisabled} />

          <PropList component={BaseCheckbox} />
        </StoryContainer>
      )
    }
  })
