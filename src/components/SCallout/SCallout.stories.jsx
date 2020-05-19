import { SCallout } from '@/components/SCallout'
import { SHeading } from '@/components/SHeading'
import PropList from '@@/docs/components/PropList'
import { generateHeading } from '@/utils/stories/render-functions'
import { select, text } from '@storybook/addon-knobs'
import jeffsum from 'jeffsum'
import { types } from './options'

const defaultSlotPlaceholder = jeffsum(5, 'sentences')

export default {
  title: 'Components|SCallout',

  parameters: {
    jest: 'SCallout',
  },
}

export const callout = () => ({
  props: {
    props: {
      default: {
        type: select('type', types, types[0], 'Optional Props'),
      },
    },
    slots: {
      default: {
        default: text('Default slot', defaultSlotPlaceholder, 'Slots'),
      },
    },
  },

  render (h) {
    const { slots, props } = this.$props
    return (
      <div>
        <SHeading>Callout</SHeading>
        <p>Callouts are used to place special emphasis on text and call attention to it.</p>

        <SHeading level="2">Example</SHeading>
        <SCallout {...{ props }}>{slots.default}</SCallout>

        {SCallout.props && <PropList component={SCallout} />}
      </div>
    )
  },
})

callout.story = {
  name: 'Callout',
}

export const calloutTypes = () => ({
  render (h) {
    return h('div', [
      generateHeading(h, { content: 'Callout Types' }),
      types.map(type => [
        generateHeading(h, { level: 3, content: type || 'Base' }),
        h(SCallout, { props: { type } }, jeffsum(5)),
      ]),
    ])
  },
})

calloutTypes.story = {
  name: 'Callout Types',

  parameters: {
    options: {
      showPanel: false,
    },
  },
}
