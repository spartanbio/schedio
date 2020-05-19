import { SHeading } from '@/components/SHeading'
import { SRadio } from '@/components/SRadio'
import { withAttrsAsProps, withUnboundAttrs } from '@/mixins/stories/form-fields'
import PropList from '@@/docs/components/PropList'
import StoryLink from '@@/docs/components/StoryLink'
import { boolean } from '@storybook/addon-knobs'

export default {
  title: 'Components|Inputs/SRadio',

  parameters: {
    jest: 'SRadio',
  },
}

export const radio = () => ({
  props: {
    radios: {
      default: Array.from({ length: 3 }, (v, i) => ({
        props: {
          ...withAttrsAsProps({
            identifier: `radio-${i + 1}`,
            id: `radio-${i + 1}`,
            name: 'radio-group',
            label: `Base Radio ${i + 1}`,
          }),
          isReversed: boolean(`radio-${i + 1} is-reversed`, false, 'Optional Props'),
        },
        attrs: {
          ...withUnboundAttrs({ identifier: `radio-${i + 1}`, value: `radio-${i + 1}` }),
          'aria-labelledby': 'radio-example',
        },
      })),
    },
  },
  render (h) {
    return (
      <div>
        <SHeading level="1">Radios</SHeading>
        <p>
          Radios provide the ability to make a single choice from a list of options. If the list
            is very long, consider using a <StoryLink to="Components/SSelect" />.
        </p>

        <SHeading level="2" id="radio-example">
          Example
        </SHeading>
        {this.radios.map(({ props, attrs }) => (
          <SRadio {...{ props }} {...{ attrs }} />
        ))}

        <PropList component={SRadio} />
      </div>
    )
  },
})

radio.story = {
  name: 'Radio',
}
