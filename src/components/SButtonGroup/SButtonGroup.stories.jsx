import { SButton } from '@/components/SButton'
import { colors } from '@/components/SButton/options'
import { SHeading } from '@/components/SHeading'
import { SButtonGroup } from '@/components/SButtonGroup'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

const colorOptions = colors.reduce(
  (options, color) => {
    return { ...options, [color]: color }
  },
  { Unset: null }
)

storiesOf('Components/SButtonGroup', module)
  .addDecorator(withKnobs)
  .add('Button Group', () => {
    const groupColor = select('Group color', colorOptions, '', 'Optional Props')
    const areGrouped = boolean('areGrouped', false, 'Optional Props')
    const button1Text = text('Button 1 text', 'Button 1', 'Slots')
    const button2Text = text('Button 2 text', 'Button 2', 'Slots')
    const button3Text = text('Button 3 text', 'Button 3', 'Slots')

    const button1Disabled = boolean('Button 1 disabled', false, '$attrs')
    const button2Disabled = boolean('Button 2 disabled', false, '$attrs')
    const button3Disabled = boolean('Button 3 disabled', false, '$attrs')

    return {
      render: h => (
        <StoryContainer>
          <SHeading level="1">Button Group</SHeading>
          <p>Button groups take multiple buttons and display them nicely.</p>
          <p>
            Buttons in a group can be merged with the <code>areGrouped</code> prop.
          </p>
          <p>Note that the button group's color will override an individual button's color.</p>

          <SHeading level="2">Example</SHeading>
          <SButtonGroup groupColor={groupColor} areGrouped={areGrouped}>
            <SButton disabled={button1Disabled}>{button1Text}</SButton>
            <SButton disabled={button2Disabled}>{button2Text}</SButton>
            <SButton disabled={button3Disabled}>{button3Text}</SButton>
          </SButtonGroup>

          <PropList component={SButtonGroup} />
        </StoryContainer>
      )
    }
  })
