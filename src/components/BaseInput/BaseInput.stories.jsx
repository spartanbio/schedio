import BaseHeading from '@/components/BaseHeading'
import BaseInput from '@/components/BaseInput'
import { allowed as options } from '@/components/BaseInput/options'
import PropList from '@/components/_docs/PropList'
import StoryContainer from '@/components/_docs/StoryContainer'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Base Components/BaseInput', module)
  .addDecorator(withKnobs)
  .add('Input', () => {
    const props = {
      id: text('ID', 'base-input', 'Required Props'),
      name: text('name', 'base-input', 'Required Props'),
      label: text('Label', 'Label text', 'Required Props'),
      placeholder: text('Placeholder', 'Placeholder text', 'Required Props'),
      type: select('Input type', options, '', 'Optional Props'),
      isInline: boolean('isInline', false, 'Optional Props'),
      isFullwidth: boolean('isFullwidth', false, 'Optional Props')
    }

    const isDisabled = boolean('isDisabled', false, '$attrs')

    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">Input</BaseHeading>
          <p>Inputs are used to collect user provided text data that should be fairly short.</p>

          <BaseHeading level="2">Example</BaseHeading>
          <BaseInput {...{ props }} disabled={isDisabled} />

          <PropList component={BaseInput} />
        </StoryContainer>
      )
    }
  })
