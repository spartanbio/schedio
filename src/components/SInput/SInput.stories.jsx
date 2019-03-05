import { SHeading } from '@/components/SHeading'
import { colors as iconColors } from '@/components/SIcon/options'
import { SInput } from '@/components/SInput'
import { allowed } from '@/components/SInput/options'
import PropList from '@/docs/PropList'
import { withAttrsAsProps, withUnboundAttrs } from '@/mixins/stories/form-fields'
import { boolean, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import icons from 'feather-icons/dist/icons.json'

const iconList = Object.keys(icons)
const iconProp = side => select(`icon-${side}`, ['', ...iconList], '', 'Optional Props')
const iconColor = side =>
  select(`icon-${side}-color`, ['', ...iconColors], 'green', 'Optional Props')

storiesOf('Components/Inputs.SInput', module)
  .addParameters({ jest: 'SInput' })
  .add('Input', () => {
    return {
      props: {
        props: {
          default: () => ({
            ...withAttrsAsProps({ id: 'base-input', name: 'base-input', label: 'Base Input' }),
            placeholder: text('placeholder', 'Placeholder text', 'Required Props'),
            type: select('type', ['', ...allowed], '', 'Optional Props'),
            isInline: boolean('isInline', false, 'Optional Props'),
            isFullwidth: boolean('isFullwidth', false, 'Optional Props'),
            iconLeft: iconProp('left'),
            iconLeftColor: iconColor('left'),
            iconRight: iconProp('right'),
            iconRightColor: iconColor('right')
          })
        },

        attrs: {
          default: withUnboundAttrs()
        }
      },
      render(h) {
        const { props, attrs } = this.$props
        return (
          <div>
            <SHeading level="1">Input</SHeading>
            <p>Inputs are used to collect user provided text data that should be fairly short.</p>

            <SHeading level="2">Example</SHeading>
            <SInput {...{ props }} {...{ attrs }} />

            <PropList component={SInput} />
          </div>
        )
      }
    }
  })
