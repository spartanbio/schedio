import { SCollapse } from '@/components/SCollapse'
import { SHeading } from '@/components/SHeading'
import PropList from '@@/docs/components/PropList'
import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'

storiesOf('Components/SCollapse', module)
  .addParameters({ jest: 'SCollapse' })
  .add('Collapse', () => {
    return {
      props: {
        props: {
          default: () => ({
            content: text('content', 'Collapse content', 'Optional props'),
            triggerText: text('trigger-text', 'Collapse trigger text', 'Optional props'),
          }),
        },
        slots: {
          default: () => ({
            content: text('v-slot:content', 'Collapse content slot', '$slots'),
            triggerText: text('v-slot:trigger-text', 'Collapse trigger text slot', '$slots'),
          }),
        },
      },
      render (h) {
        const { props, slots } = this.$props

        return (
          <div>
            <SHeading>Collapse</SHeading>
            <p>
              <code>{'<SCollapse />'}</code> can be used to toggle the visibility of content.
            </p>

            <SHeading level="2">Example</SHeading>

            <div>
              <SCollapse {...{ props }} />

              <SCollapse>
                <template slot="trigger-text">{slots.triggerText}</template>
                <div slot="content">{slots.content}</div>
              </SCollapse>

              <SCollapse />
            </div>

            {/* This doesn't work if props are only generated through a mixin */}
            {SCollapse.props && <PropList component={SCollapse} />}
          </div >
        )
      },
    }
  })
