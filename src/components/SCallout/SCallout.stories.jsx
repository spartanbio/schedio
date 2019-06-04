import { SCallout } from '@/components/SCallout'
import { SHeading } from '@/components/SHeading'
import PropList from '@/docs/PropList'
import { generateHeading } from '@/utils/stories/render-functions'
import { select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import jeffsum from 'jeffsum'
import { types } from './options'

const defaultSlotPlaceholder = jeffsum(5, 'sentences')

storiesOf('Components/SCallout', module)
  .addParameters({ jest: 'SCallout' })
  .add('Callout', () => {
    return {
      props: {
        props: {
          default: {
            type: select('type', types, types[0], 'Optional Props')
          }
        },
        slots: {
          default: {
            default: text('Default slot', defaultSlotPlaceholder, 'Slots')
          }
        }
      },

      render(h) {
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
      }
    }
  })
  .add(
    'Callout Types',
    () => ({
      render(h) {
        return h('div', [
          generateHeading(h, { content: 'Callout Types' }),
          types.map(type => [
            generateHeading(h, { level: 3, content: type || 'Base' }),
            h(SCallout, { props: { type } }, jeffsum(5))
          ])
        ])
      }
    }),
    {
      options: {
        showPanel: false
      }
    }
  )
