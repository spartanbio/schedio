import BaseHeading from '@/components/BaseHeading'
import BaseInput from '@/components/BaseInput'
import { allowed as options } from '@/components/BaseInput/options'
import { withAttrsAsProps, withUnboundAttrs } from '@/components/mixins/stories/form-fields'
import PropList from '@/components/_docs/PropList'
import StoryContainer from '@/components/_docs/StoryContainer'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Base Components/BaseInput', module)
  .addDecorator(withKnobs)
  .add('Input', () => {
    const props = {
      ...withAttrsAsProps({ id: 'base-input', name: 'base-input', label: 'Base Input' }),
      placeholder: text('placeholder', 'Placeholder text', 'Required Props'),
      type: select('type', options, '', 'Optional Props'),
      isInline: boolean('isInline', false, 'Optional Props'),
      isFullwidth: boolean('isFullwidth', false, 'Optional Props')
    }

    const attrs = withUnboundAttrs()

    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">Input</BaseHeading>
          <p>Inputs are used to collect user provided text data that should be fairly short.</p>

          <BaseHeading level="2">Example</BaseHeading>
          <BaseInput {...{ props }} {...{ attrs }} />

          <PropList component={BaseInput} />
        </StoryContainer>
      )
    }
  })
