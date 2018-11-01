import { SSpinner } from '@/components/SSpinner'
import { colors, sizes } from '@/components/SSpinner/options'
import { SHeading } from '@/components/SHeading'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { select, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/SSpinner', module)
  .addDecorator(withKnobs)
  .add('SSpinner', () => {
    const props = {
      size: select('size', ['', ...sizes], '', 'Optional Props'),
      color: select('color', ['', ...colors], '', 'Optional Props')
    }

    return {
      render: h => (
        <StoryContainer>
          <SHeading level="1">Spinner</SHeading>
          <p>
            Spinners indicate that an action is occuring, but its progress is difficult, or not
            practical to measure.
          </p>

          <SHeading level="2">Example</SHeading>
          <SSpinner {...{ props }} />

          {SSpinner.props && <PropList component={SSpinner} />}
        </StoryContainer>
      )
    }
  })
