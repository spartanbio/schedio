import { SButton } from '@/components/SButton'
import { colors, sizes } from '@/components/SButton/options'
import { SHeading } from '@/components/SHeading'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import StoryLink from '@/docs/StoryLink'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/SButton', module)
  .addDecorator(withKnobs)
  .add('Button', () => ({
    props: {
      buttonColor: {
        type: String,
        default: select('Button color', ['', ...colors], '', 'Optional Props')
      },
      buttonSize: {
        type: String,
        default: select('Button size', ['', ...sizes], '', 'Optional Props')
      },
      buttonText: {
        type: String,
        default: text('Button text', 'Sample text', 'Slots')
      },
      disabled: {
        type: Boolean,
        default: boolean('disabled', false, '$attrs')
      }
    },
    render(h) {
      const { buttonText, disabled, ...props } = this.$props

      return (
        <StoryContainer>
          <SHeading level="1">Buttons</SHeading>
          <p>Buttons are used to make actions immediately visible and easy to click.</p>
          <p>
            Use <StoryLink to="Components/SButtonGroup" /> to group multiple buttons.
          </p>

          <SHeading level="2">Accessibility</SHeading>
          <p>
            Many buttons have a <code>text-shadow</code> applied to improve acessibility.{' '}
            <code>@storybook/addon-a11y</code> does not detect the shadow, however, and will still
            throw a warning.
          </p>

          <SHeading level="2">Example</SHeading>
          <SButton {...{ props }} disabled={disabled}>
            {buttonText}
          </SButton>

          <PropList component={SButton} />
        </StoryContainer>
      )
    }
  }))
