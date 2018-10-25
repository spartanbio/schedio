import { CardContainer } from '@/components/CardContainer'
import { BaseHeading } from '@/components/BaseHeading'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/CardContainer', module)
  .addDecorator(withKnobs)
  .add('CardContainer', () => {
    const slotContent = text('default', 'This is a CardContainer!', 'Slots')

    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">Card Container</BaseHeading>
          <p>Creates a container that also looks like a card.</p>

          <BaseHeading level="2">Example</BaseHeading>
          <CardContainer>{slotContent}</CardContainer>

          {CardContainer.props && <PropList component={CardContainer} />}
        </StoryContainer>
      )
    }
  })
