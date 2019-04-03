import { SCallout } from '@/components/SCallout'
import { SHeading } from '@/components/SHeading'
import PropList from '@/docs/PropList'
import { select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import jeffsum from 'jeffsum'
import { calloutTypes } from './options'

const defaultSlotPlaceholder = jeffsum(5, 'sentences')
storiesOf('Components/SCallout', module)
  .addParameters({ jest: SCallout })
  .add('SCallout', () => {
    return {
      props: {
        props: {
          default: {
            calloutType: select('calloutType', calloutTypes, calloutTypes[0], 'Optional Props')
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
            <SHeading level="1">SCallout</SHeading>
            <p>Describe the component here</p>

            <SHeading level="2">Example</SHeading>
            <SCallout {...{ props }}>{slots.default}</SCallout>

            {SCallout.props && <PropList component={SCallout} />}
          </div>
        )
      }
    }
  })
