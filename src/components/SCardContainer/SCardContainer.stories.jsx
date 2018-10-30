import { SCardContainer } from '@/components/SCardContainer'
import { SHeading } from '@/components/SHeading'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/SCardContainer', module)
  .addDecorator(withKnobs)
  .add('SCardContainer', () => {
    const slotContent = text('default', 'This is a SCardContainer!', 'Slots')

    return {
      render: h => (
        <StoryContainer>
          <SHeading level="1">Card Container</SHeading>
          <p>Creates a container that also looks like a card.</p>

          <SHeading level="2">Example</SHeading>
          <SCardContainer>{slotContent}</SCardContainer>

          {SCardContainer.props && <PropList component={SCardContainer} />}
        </StoryContainer>
      )
    }
  })
