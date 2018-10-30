import { SHeading } from '@/components/SHeading'
import { SInput } from '@/components/SInput'
import { allowed } from '@/components/SInput/options'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { withAttrsAsProps, withUnboundAttrs } from '@/mixins/stories/form-fields'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

const options = allowed.reduce((opts, a) => ({ ...opts, [a]: a }), { Unset: '' })

storiesOf('Components/SInput', module)
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
          <SHeading level="1">Input</SHeading>
          <p>Inputs are used to collect user provided text data that should be fairly short.</p>

          <SHeading level="2">Example</SHeading>
          <SInput {...{ props }} {...{ attrs }} />

          <PropList component={SInput} />
        </StoryContainer>
      )
    }
  })
