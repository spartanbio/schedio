import { SContainer } from '@/components/SContainer'
import { SContainerColumn } from '@/components/SContainerColumn'
import { SContainerRow } from '@/components/SContainerRow'
import { SHeading } from '@/components/SHeading'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import PropList from '@/docs/PropList'

storiesOf('Components/Layout.SContainer', module)
  .addParameters({ jest: 'SContainer' })
  .add('SContainer', function SContainerDocs() {
    return {
      props: {
        props: {
          default: () => ({
            isFullwidth: boolean('is-fullwidth', false)
          })
        }
      },
      render(h) {
        const { props } = this.$props
        return (
          <div>
            <SHeading level="1">Container</SHeading>
            <p>
              The container defaults to being narrower than the window, but it can be set to
              fullwidth. It has been styled for visibility, and is normally invisible.
            </p>
            <p>
              It has padding that is hidden when used with a <code>SContainerRow</code>.
            </p>

            <SHeading level="2">Example</SHeading>

            <SContainer {...{ props }} style="border: 1px solid black;">
              <SContainerRow>
                <SContainerColumn>Container content</SContainerColumn>
              </SContainerRow>
            </SContainer>

            <PropList component={SContainer} />
          </div>
        )
      }
    }
  })
