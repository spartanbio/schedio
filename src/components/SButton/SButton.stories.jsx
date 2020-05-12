import { SButton } from '@/components/SButton'
import { SCallout } from '@/components/SCallout'
import { colors, colorNames, sizes, types, allShadeOptions } from '@/components/SButton/options'
import { SContainerColumn } from '@/components/SContainerColumn'
import { SContainerRow } from '@/components/SContainerRow'
import { SHeading } from '@/components/SHeading'
import { generateHeading } from '@/utils/stories/render-functions'
import PropList from '@@/docs/components/PropList'
import StoryLink from '@@/docs/components/StoryLink'
import { boolean, select, text } from '@storybook/addon-knobs'
import icons from 'feather-icons/dist/icons.json'

const iconNames = Object.keys(icons)
const iconProp = side => select(`icon-${side}`, ['', ...iconNames], '', 'Optional Props')

export default {
  title: 'Components|Buttons/SButton',

  parameters: {
    jest: 'SButton',
  },
}

export const button = () => ({
  props: {
    color: {
      type: String,
      default: select('color', ['', ...colorNames], '', 'Optional Props'),
    },
    shade: {
      type: String,
      default: select('shade', ['', ...allShadeOptions], '', 'Optional Props'),
    },
    type: {
      type: String,
      default: select('type', ['', ...types], '', 'Optional Props'),
    },
    size: {
      type: String,
      default: select('size', ['', ...sizes], '', 'Optional Props'),
    },
    buttonText: {
      type: String,
      default: text('Button text', 'Sample text', 'Slots'),
    },
    disabled: {
      type: Boolean,
      default: boolean('disabled', false, '$attrs'),
    },
    isLoading: {
      type: Boolean,
      default: boolean('is-loading', false, 'Optional Props'),
    },
    iconOnly: {
      type: Boolean,
      default: boolean('icon-only', false, 'Optional Props'),
    },
    iconLeft: {
      type: String,
      default: iconProp('left'),
    },
    iconRight: {
      type: String,
      default: iconProp('right'),
    },
  },
  render (h) {
    const { buttonText, disabled, ...props } = this.$props

    return (
      <div>
        <SHeading>Buttons</SHeading>
        <p>Buttons are used to make actions immediately visible and easy to click.</p>
        <p>
          Use <StoryLink to="Components/Buttons.SButtonGroup" story="Button Group" /> to group
          multiple buttons.
        </p>
        <p>
          If you want the button to just contain an icon, set the <code>icon-only</code> prop to{' '}
          <code>true</code>.
        </p>

        <SHeading level="2">Example</SHeading>
        <SButton {...{ props }} disabled={disabled}>
          {buttonText}
        </SButton>

        <SContainerRow align="center">
          <SContainerColumn>
            <PropList component={SButton} />
          </SContainerColumn>

          <SContainerColumn md="5">
            <SCallout type="warning">
              If you need to set the button's type (e.g.: <code>type="submit"</code>), use the
              <code>native-type</code> prop.
            </SCallout>
          </SContainerColumn>
        </SContainerRow>
      </div >
    )
  },
})

button.story = {
  name: 'Button',
}

export const coloredButton = () => ({
  render (h) {
    return (
      <div>
        <SHeading>Colored Buttons</SHeading>
        {generateButtons(h)}
      </div>
    )
  },
})

coloredButton.story = {
  name: 'Colored Button',

  parameters: {
    options: {
      showPanel: false,
    },
  },
}

export const outlinedButtons = () => ({
  render (h) {
    return (
      <div>
        <SHeading>Outlined Buttons</SHeading>
        {generateButtons(h, { type: 'outlined' })}
      </div>
    )
  },
})

outlinedButtons.story = {
  name: 'Outlined Buttons',

  parameters: {
    options: {
      showPanel: false,
    },
  },
}

export const textButtons = () => ({
  render (h) {
    return (
      <div>
        <SHeading>Text Buttons</SHeading>
        {generateButtons(h, { type: 'text' })}
      </div>
    )
  },
})

textButtons.story = {
  name: 'Text Buttons',

  parameters: {
    options: {
      showPanel: false,
    },
  },
}

function generateButtons (h, propsData = {}) {
  const buttons = Object.entries(colors).map(([color, shades]) => {
    const rows = Object.keys(shades).map((shade) => {
      const props = {
        ...propsData,
        shade,
        color,
      }

      return h(
        SContainerRow,
        { props: { align: 'end' } },
        [
          h(SContainerColumn, { props: { md: 12, lg: 1 } }, [
            h(
              SHeading,
              {
                props: { level: 3 },
                style: { padding: '0.5em', textTransform: 'capitalize' },
              },
              shade,
            ),
          ]),
          generateButtonColumn(h, props, 'No icons'),
          generateButtonColumn(h, { ...props, iconLeft: randIcon() }, 'Icon left'),
          generateButtonColumn(h, { ...props, iconRight: randIcon() }, 'Icon right'),
          generateButtonColumn(h, { ...props, iconLeft: randIcon(), iconRight: randIcon() }, 'Both'),
        ],
      )
    })

    return [
      generateHeading(h, { level: 2, content: color }),
      rows,
    ]
  })

  return h('div', buttons)
}

function generateButtonColumn (h, props, heading) {
  return h(SContainerColumn, { props: { md: 3, lg: 2 } }, [
    generateHeading(h, { level: 3, content: heading }),
    h(SButton, { props }, 'Button'),
  ])
}

function randIcon () {
  const randIdx = Math.round(Math.random() * iconNames.length)
  return iconNames[randIdx]
}
