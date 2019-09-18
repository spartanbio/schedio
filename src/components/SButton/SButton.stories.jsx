import { SButton } from '@/components/SButton'
import { colors, sizes } from '@/components/SButton/options'
import { SHeading } from '@/components/SHeading'
import PropList from '@@/docs/components/PropList'
import StoryLink from '@@/docs/components/StoryLink'
import { boolean, select, text } from '@storybook/addon-knobs'
import icons from 'feather-icons/dist/icons.json'
import { generateHeading } from '@/utils/stories/render-functions'
import { SContainerColumn } from '@/components/SContainerColumn'
import { SContainerRow } from '@/components/SContainerRow'

const iconNames = Object.keys(icons)
const iconProp = side => select(`icon-${side}`, ['', ...iconNames], '', 'Optional Props')

export default {
  title: 'Components/Buttons.SButton',

  parameters: {
    jest: 'SButton',
  },
}

export const button = () => ({
  props: {
    color: {
      type: String,
      default: select('color', ['', ...colors], '', 'Optional Props'),
    },
    isOutlined: {
      type: String,
      default: boolean('is-outlined', false, 'Optional Props'),
    },
    isText: {
      type: String,
      default: boolean('is-text', false, 'Optional Props'),
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

        <SHeading level="2">Accessibility</SHeading>
        <p>
          Many buttons have a <code>text-shadow</code> applied to improve acessibility.{' '}
        </p>
        <p>
          If you want the button to just contain an icon, set the <code>icon-only</code> prop to{' '}
          <code>true</code>.
        </p>

        <SHeading level="2">Example</SHeading>
        <SButton {...{ props }} disabled={disabled}>
          {buttonText}
        </SButton>

        <PropList component={SButton} />
      </div>
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
        {generateButtons(h, { isOutlined: true })}
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
        {generateButtons(h, { isText: true })}
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
  return colors.map((color) => {
    const props = {
      ...propsData,
      color,
    }

    return [
      generateHeading(h, { level: 2, content: color }),
      h(SContainerRow, [
        generateButtonColumn(h, props, 'No icons'),
        generateButtonColumn(h, { ...props, iconLeft: randIcon() }, 'Icon left'),
        generateButtonColumn(h, { ...props, iconRight: randIcon() }, 'Icon right'),
        generateButtonColumn(h, { ...props, iconLeft: randIcon(), iconRight: randIcon() }, 'Both'),
      ]),
    ]
  })
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
