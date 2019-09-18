import { SHeading } from '@/components/SHeading'
import { SSwitch } from '@/components/SSwitch'
import { withAttrsAsProps, withUnboundAttrs } from '@/mixins/stories/form-fields'
import PropList from '@@/docs/components/PropList'
import { boolean, select } from '@storybook/addon-knobs'

export default {
  title: 'Components/Inputs.SSwitch',

  parameters: {
    jest: 'SSwitch',
  },
}

export const switchStory = () => ({
  props: {
    props: {
      default: () => ({
        ...withAttrsAsProps({
          id: 'toggle-switch',
          name: 'toggle-switch',
          label: 'Toggle Switch',
        }),
        isReversed: boolean('is-reversed', false, 'Optional Props'),
        size: select('size', ['', 'base', 'medium', 'large'], '', 'Optional Props'),
      }),
    },
    attrs: {
      default: withUnboundAttrs({ value: 'toggle-switch' }),
    },
  },
  render (h) {
    const { props, attrs } = this.$props
    return (
      <div>
        <SHeading level="1">Switch</SHeading>
        <p>Switches toggle a single setting off or on.</p>
        <SHeading level="2">Example</SHeading>
        <SSwitch {...{ props }} {...{ attrs }} />

        {SSwitch.props && <PropList component={SSwitch} />}
      </div>
    )
  },
})

switchStory.story = {
  name: 'Switch',
}
