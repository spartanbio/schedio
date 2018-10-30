import { SButton } from '@/components/SButton'
import { colors, sizes } from '@/components/SButton/options'
import { SHeading } from '@/components/SHeading'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import StoryLink from '@/docs/StoryLink'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

const colorOptions = colors.reduce(
  (options, color) => {
    return { ...options, [color]: color }
  },
  { Unset: null }
)
const sizeOptions = sizes.reduce(
  (options, size) => {
    return { ...options, [size]: size }
  },
  { Unset: null }
)

storiesOf('Components/SButton', module)
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
          <SHeading level="1">Buttons</SHeading>
          <p>Buttons are used to make actions immediately visible and easy to click.</p>
          <p>
            Use a <StoryLink to="Components/SButtonGroup" /> to group multiple buttons.
          </p>

          <SHeading level="2">Example</SHeading>
          <SButton {...{ props }} disabled={disabled}>
            {buttonText}
          </SButton>

          <PropList component={SButton} />
        </StoryContainer>
      )
    }
  })
