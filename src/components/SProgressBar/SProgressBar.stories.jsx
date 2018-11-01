import { SProgressBar } from '@/components/SProgressBar'
import { colors, sizes } from '@/components/SProgressBar/options'
import { SHeading } from '@/components/SHeading'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { boolean, number, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/SProgressBar', module)
  .addDecorator(withKnobs)
  .add('SProgressBar', () => {
    const props = {
      progress: number('progress', 30, { range: true, min: 0, max: 100 }, 'Required Props'),
      size: select('size', ['', ...sizes], '', 'Optional Props'),
      color: select('color', ['', ...colors], '', 'Optional Props'),
      message: text('message', 'Something is happening', 'Optional Props'),
      showPercentComplete: boolean('showPercentComplete', true, 'Optional Props')
    }

    return {
      render: h => (
        <StoryContainer>
          <SHeading level="1">Progress Bar</SHeading>
          <p>Progress bars visually represent the completion of a task.</p>

          <SHeading level="2">Example</SHeading>
          <SProgressBar {...{ props }} />

          {SProgressBar.props && <PropList component={SProgressBar} />}
        </StoryContainer>
      )
    }
  })
