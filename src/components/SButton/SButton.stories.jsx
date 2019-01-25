import { SButton } from '@/components/SButton'
import { colors, sizes } from '@/components/SButton/options'
import { SHeading } from '@/components/SHeading'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import StoryLink from '@/docs/StoryLink'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import icons from 'feather-icons/dist/icons.json'

const iconProp = side => select(`icon-${side}`, ['', ...Object.keys(icons)], '', 'Optional Props')

storiesOf('Components/SButton', module)
  .addDecorator(withKnobs)
  .add('Button', () => ({
    props: {
      buttonColor: {
        type: String,
        default: select('button-color', ['', ...colors], '', 'Optional Props')
      },
      outlineColor: {
        type: String,
        default: select('outline-color', ['', ...colors], '', 'Optional Props')
      },
      buttonSize: {
        type: String,
        default: select('button-size', ['', ...sizes], '', 'Optional Props')
      },
      buttonText: {
        type: String,
        default: text('Button text', 'Sample text', 'Slots')
      },
      disabled: {
        type: Boolean,
        default: boolean('disabled', false, '$attrs')
      },
      isLoading: {
        type: Boolean,
        default: boolean('is-loading', false, 'Optional Props')
      },
      iconOnly: {
        type: Boolean,
        default: boolean('icon-only', false, 'Optional Props')
      },
      iconLeft: {
        type: String,
        default: iconProp('left')
      },
      iconRight: {
        type: String,
        default: iconProp('right')
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
          <p>
            If you want the button to just contain an icon, set the <code>icon-only</code> prop to{' '}
            <code>true</code>.
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
