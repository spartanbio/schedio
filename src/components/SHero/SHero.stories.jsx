import { SHero } from '@/components/SHero'
import { SHeading } from '@/components/SHeading'
import PropList from '@/docs/PropList'
import { boolean, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import { colors, heights } from './options'

storiesOf('Components/Layout.SHero', module)
  .addParameters({ jest: 'SHero' })
  .add('SHero', () => {
    return {
      props: {
        color: {
          type: String,
          default: select('color', ['', ...colors], '', 'Optional Props')
        },
        height: {
          type: String,
          default: select('height', ['', ...heights], '', 'Optional Props')
        },
        hasNoPadding: {
          type: Boolean,
          default: boolean('has-no-padding', false, 'Optional Props')
        },
        slots: {
          default: () => ({
            head: text('head', 'Head slot', 'Slots'),
            default: text('default', 'Default slot', 'Slots'),
            foot: text('foot', 'Foot slot', 'Slots')
          })
        }
      },
      render(h) {
        const { slots, ...props } = this.$props
        return (
          <div>
            <SHeading level="1">SHero</SHeading>
            <p>
              Hero components are fullwidth banners. They are often the first visual element a user
              encounters on a page. They present an overview of a page's most important content.
              Padding on the default slot can be toggled with the <code>has-no-padding</code> prop.
            </p>

            <SHeading level="2">Example</SHeading>
            <SHero {...{ props }}>
              {Object.entries(slots).map(slot => {
                return <template slot={slot[0]}>{slot[1]}</template>
              })}
            </SHero>

            {SHero.props && <PropList component={SHero} />}
          </div>
        )
      }
    }
  })
