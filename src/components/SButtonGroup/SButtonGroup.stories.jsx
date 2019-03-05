import { SButton } from '@/components/SButton'
import { colors } from '@/components/SButton/options'
import { SHeading } from '@/components/SHeading'
import { SButtonGroup } from '@/components/SButtonGroup'
import PropList from '@/docs/PropList'
import { boolean, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/Buttons.SButtonGroup', module)
  .addParameters({ jest: 'SButtonGroup' })
  .add('Button Group', () => {
    return {
      props: {
        groupColor: { default: select('group-color', ['', ...colors], '', 'Optional Props') },
        groupOutlineColor: {
          default: select('group-outline-color', ['', ...colors], '', 'Optional Props')
        },
        isGrouped: { default: boolean('is-grouped', false, 'Optional Props') },
        button1Text: { default: text('Button 1 text', 'Button 1', 'Slots') },
        button2Text: { default: text('Button 2 text', 'Button 2', 'Slots') },
        button3Text: { default: text('Button 3 text', 'Button 3', 'Slots') },
        button1Disabled: { default: boolean('Button 1 disabled', false, '$attrs') },
        button2Disabled: { default: boolean('Button 2 disabled', false, '$attrs') },
        button3Disabled: { default: boolean('Button 3 disabled', false, '$attrs') }
      },
      render(h) {
        return (
          <div>
            <SHeading level="1">Button Group</SHeading>
            <p>Button groups take multiple buttons and display them nicely.</p>
            <p>
              Buttons in a group can be merged with the <code>isGrouped</code> prop.
            </p>
            <p>Note that the button group's color will override an individual button's color.</p>

            <SHeading level="2">Example</SHeading>
            <SButtonGroup
              groupColor={this.groupColor}
              groupOutlineColor={this.groupOutlineColor}
              isGrouped={this.isGrouped}
            >
              <SButton disabled={this.button1Disabled}>{this.button1Text}</SButton>
              <SButton disabled={this.button2Disabled}>{this.button2Text}</SButton>
              <SButton disabled={this.button3Disabled}>{this.button3Text}</SButton>
            </SButtonGroup>

            <PropList component={SButtonGroup} />
          </div>
        )
      }
    }
  })
