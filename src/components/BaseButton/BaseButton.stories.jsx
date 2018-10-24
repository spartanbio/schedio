import { BaseButton } from '@/components/BaseButton'
import { colors, sizes } from '@/components/BaseButton/options'
import { BaseHeading } from '@/components/BaseHeading'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import StoryLink from '@/docs/StoryLink'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

const colorOptions = ['', ...colors]
const sizeOptions = ['', ...sizes]

storiesOf('Base Components/BaseButton', module)
  .addDecorator(withKnobs)
  .add('Button', () => {
    const buttonColor = select('Button color', colorOptions, '', 'Optional Props')
    const buttonSize = select('Button size', sizeOptions, '', 'Optional Props')
    const buttonText = text('Button text', 'Sample text', 'Slots')

    const props = {
      buttonColor,
      buttonSize
    }

    const disabled = boolean('disabled', false, '$attrs')

    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">Buttons</BaseHeading>
          <p>Buttons are used to make actions immediately visible and easy to click.</p>
          <p>
            Use a <StoryLink to="Components/ButtonGroup" /> to group multiple buttons.
          </p>

          <BaseHeading level="2">Example</BaseHeading>
          <BaseButton {...{ props }} disabled={disabled}>
            {buttonText}
          </BaseButton>

          <PropList component={BaseButton} />
        </StoryContainer>
      )
    }
  })
