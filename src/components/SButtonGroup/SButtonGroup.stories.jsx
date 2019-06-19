import { SButton } from '@/components/SButton'
import { colors } from '@/components/SButton/options'
import { SButtonGroup } from '@/components/SButtonGroup'
import { SContainerColumn } from '@/components/SContainerColumn'
import { SContainerRow } from '@/components/SContainerRow'
import { SHeading } from '@/components/SHeading'
import PropList from '@@/docs/components/PropList'
import { boolean, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import { generateHeading } from '@/utils/stories/render-functions'

storiesOf('Components/Buttons.SButtonGroup', module)
  .addParameters({ jest: 'SButtonGroup' })
  .add('Button Group', () => {
    return {
      props: {
        color: { default: select('color', ['', ...colors], '', 'Optional Props') },
        isOutlined: {
          default: boolean('is-outlined', false, 'Optional Props'),
        },
        isGrouped: { default: boolean('is-grouped', false, 'Optional Props') },
        button1Text: { default: text('Button 1 text', 'Button 1', 'Slots') },
        button2Text: { default: text('Button 2 text', 'Button 2', 'Slots') },
        button3Text: { default: text('Button 3 text', 'Button 3', 'Slots') },
        button1Disabled: { default: boolean('Button 1 disabled', false, '$attrs') },
        button2Disabled: { default: boolean('Button 2 disabled', false, '$attrs') },
        button3Disabled: { default: boolean('Button 3 disabled', false, '$attrs') },
      },
      render (h) {
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
              color={this.color}
              isOutlined={this.isOutlined}
              isGrouped={this.isGrouped}
            >
              <SButton disabled={this.button1Disabled}>{this.button1Text}</SButton>
              <SButton disabled={this.button2Disabled}>{this.button2Text}</SButton>
              <SButton disabled={this.button3Disabled}>{this.button3Text}</SButton>
            </SButtonGroup>

            <PropList component={SButtonGroup} />
          </div>
        )
      },
    }
  })
  .add(
    'Solid Group',
    () => ({
      render (h) {
        return (
          <div>
            <SHeading>Solid Group</SHeading>
            {colorsToGroups(h)}
          </div>
        )
      },
    }),
    {
      options: {
        showPanel: false,
      },
    }
  )
  .add(
    'Outlined Group',
    () => ({
      render (h) {
        return (
          <div>
            <SHeading>Outlined Group</SHeading>
            {colorsToGroups(h, { isOutlined: true })}
          </div>
        )
      },
    }),
    {
      options: {
        showPanel: false,
      },
    }
  )

function colorsToGroups (h, props = { color: '' }) {
  return colors.map(color => generateGroups(h, { ...props, color }))
}

function generateGroups (h, props = { color: '' }) {
  return h(SContainerRow, [
    h(SContainerColumn, [
      generateHeading(h, { level: 2, content: props.color }),
      h(SContainerRow, [
        generateNarrowColumn(h, [
          generateHeading(h, { level: 3, content: 'Ungrouped' }),
          generateSingleGroup(h, { ...props }),
        ]),
        generateNarrowColumn(h, [
          generateHeading(h, { level: 3, content: 'Grouped' }),
          generateSingleGroup(h, { ...props, isGrouped: true }),
        ]),
      ]),
    ]),
  ])
}

function generateNarrowColumn (h, content) {
  return h(SContainerColumn, { props: { narrow: true } }, content)
}

function generateSingleGroup (h, props) {
  return h(SButtonGroup, { props }, generateTheeButtons(h))
}

function generateTheeButtons (h) {
  return Array.from({ length: 3 }, (v, idx) => h(SButton, `Button ${idx + 1}`))
}
