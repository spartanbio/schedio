import BaseButton from '@/components/BaseButton'
import { colors } from '@/components/BaseButton/options'
import ButtonGroup from '@/components/ButtonGroup'
import BaseHeading from '@/components/BaseHeading'
import PropList from '@/components/_docs/PropList'
import StoryContainer from '@/components/_docs/StoryContainer'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

const colorOptions = ['', ...colors]

storiesOf('Components/ButtonGroup', module)
  .addDecorator(withKnobs)
  .add('Button Group', () => {
    const groupColor = select('Group color', colorOptions, '', 'Optional props')
    const button1Text = text('Button 1 text', 'Button 1', 'Slots')
    const button2Text = text('Button 2 text', 'Button 2', 'Slots')
    const button3Text = text('Button 3 text', 'Button 3', 'Slots')

    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">Button Group</BaseHeading>
          <p>Button groups take individual buttons, and merge them into a single group.</p>

          <BaseHeading level="2">Example</BaseHeading>
          <ButtonGroup groupColor={groupColor}>
            <BaseButton>{button1Text}</BaseButton>
            <BaseButton>{button2Text}</BaseButton>
            <BaseButton>{button3Text}</BaseButton>
          </ButtonGroup>

          <PropList component={ButtonGroup} />
        </StoryContainer>
      )
    }
  })
