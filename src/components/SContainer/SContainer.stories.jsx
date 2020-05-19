import { SContainer } from '@/components/SContainer'
import { SContainerColumn } from '@/components/SContainerColumn'
import { SContainerRow } from '@/components/SContainerRow'
import { SHeading } from '@/components/SHeading'
import PropList from '@@/docs/components/PropList'
import { boolean, text } from '@storybook/addon-knobs'

export default {
  title: 'Components|Layout/SContainer',

  parameters: {
    jest: 'SContainer',
  },
}

export const container = () => ({
  props: {
    props: {
      default: () => ({
        isFullwidth: boolean('is-fullwidth', false, 'Optional Props'),
        tag: text('tag', 'div', 'Optional Props'),
      }),
    },
  },
  render (h) {
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
  },
})

container.story = {
  name: 'Container',
}
