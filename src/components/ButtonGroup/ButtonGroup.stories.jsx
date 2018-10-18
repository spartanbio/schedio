import BaseButton from '@/components/BaseButton'
import { colors } from '@/components/BaseButton/options'
import BaseHeading from '@/components/BaseHeading'
import ButtonGroup from '@/components/ButtonGroup'
import PropList from '@/components/_docs/PropList'
import StoryContainer from '@/components/_docs/StoryContainer'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

const colorOptions = ['', ...colors]

storiesOf('Components/ButtonGroup', module)
  .addDecorator(withKnobs)
  .add('Button Group', () => {
    const groupColor = select('Group color', colorOptions, '', 'Optional props')
    const button1Text = text('Button 1 text', 'Button 1', 'Slots')
    const button2Text = text('Button 2 text', 'Button 2', 'Slots')
    const button3Text = text('Button 3 text', 'Button 3', 'Slots')

    const button1Disabled = boolean('Button 1 disabled', false, '$attrs')
    const button2Disabled = boolean('Button 2 disabled', false, '$attrs')
    const button3Disabled = boolean('Button 3 disabled', false, '$attrs')

    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">Button Group</BaseHeading>
          <p>Button groups take individual buttons, and merge them into a single group.</p>

          <BaseHeading level="2">Example</BaseHeading>
          <ButtonGroup groupColor={groupColor}>
            <BaseButton disabled={button1Disabled}>{button1Text}</BaseButton>
            <BaseButton disabled={button2Disabled}>{button2Text}</BaseButton>
            <BaseButton disabled={button3Disabled}>{button3Text}</BaseButton>
          </ButtonGroup>

          <PropList component={ButtonGroup} />
        </StoryContainer>
      )
    }
  })
