import { SHeading } from '@/components/SHeading'
import { SSwitch } from '@/components/SSwitch'
import { withAttrsAsProps, withUnboundAttrs } from '@/mixins/stories/form-fields'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { boolean, select, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/SSwitch', module)
  .addDecorator(withKnobs)
  .add('SSwitch', () => {
    const props = {
      ...withAttrsAsProps({ id: 'toggle-switch', name: 'toggle-switch', label: 'Toggle Switch' }),
      isReversed: boolean('isReversed', false, 'Optional Props'),
      size: select('size', ['', 'base', 'medium', 'large'], '', 'Optional Props')
    }

    const attrs = withUnboundAttrs({ value: 'toggle-switch' })

    return {
      render: h => (
        <StoryContainer>
          <SHeading level="1">Switch</SHeading>
          <p>Switches toggle a single setting off or on.</p>
          <SHeading level="2">Example</SHeading>
          <SSwitch {...{ props }} {...{ attrs }} />

          {SSwitch.props && <PropList component={SSwitch} />}
        </StoryContainer>
      )
    }
  })
