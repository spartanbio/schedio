import { SHero } from '@/components/SHero'
import { SHeading } from '@/components/SHeading'
import { SContainer } from '@/components/SContainer'
import PropList from '@@/docs/components/PropList'
import { boolean, select, text } from '@storybook/addon-knobs'
import { colors, heights } from './options'

export default {
  title: 'Components/Layout.SHero',

  parameters: {
    jest: 'SHero',
  },
}

export const hero = () => ({
  props: {
    color: {
      type: String,
      default: select('color', ['', ...colors], '', 'Optional Props'),
    },
    height: {
      type: String,
      default: select('height', ['', ...heights], '', 'Optional Props'),
    },
    hasNoPadding: {
      type: Boolean,
      default: boolean('has-no-padding', false, 'Optional Props'),
    },
    slots: {
      default: () => ({
        head: text('head', 'Head slot', 'Slots'),
        default: text('default', 'Default slot', 'Slots'),
        foot: text('foot', 'Foot slot', 'Slots'),
      }),
    },
  },
  render (h) {
    const { slots, ...props } = this.$props
    return (
      <div>
        <SHeading level="1">Hero</SHeading>
        <p>
          Hero components are fullwidth banners. They are often the first visual element a user
          encounters on a page. They present an overview of a page's most important content.
            Padding on the default slot can be toggled with the <code>has-no-padding</code> prop.
        </p>

        <SHeading level="2">Example</SHeading>
        <SHero {...{ props }}>
          {Object.entries(slots).map((slot) => {
            return <template slot={slot[0]}>{slot[1]}</template>
          })}
        </SHero>

        {SHero.props && <PropList component={SHero} />}
      </div>
    )
  },
})

hero.story = {
  name: 'Hero',
}

export const heroColors = () => ({
  render (h) {
    return (
      <div>
        <SHeading>Hero Colors</SHeading>

        {colors.map(color => generateHero(h, color))}
      </div>
    )
  },
})

heroColors.story = {
  name: 'Hero Colors',

  parameters: {
    options: {
      showPanel: false,
    },
  },
}

function generateHero (h, color) {
  return [
    h(SHeading, { props: { level: 2 } }, color),
    h(SHero, { props: { color, height: 'half' } }, [
      h(SContainer, [
        h(
          SHeading,
          {
            props: {
              isDisplay: true,
              isTitle: true,
            },
          },
          'First line'
        ),
        h(
          SHeading,
          {
            props: {
              isDisplay: true,
              isSubtitle: true,
              level: 2,
              isSubtle: true,
            },
          },
          'Second line'
        ),
      ]),
    ]),
  ]
}
