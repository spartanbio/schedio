import { SHeading } from '@/components/SHeading'
import { colors as iconColors } from '@/components/SIcon/options'
import { SInput } from '@/components/SInput'
import { allowed } from '@/components/SInput/options'
import PropList from '@/docs/PropList'
import { withAttrsAsProps, withUnboundAttrs } from '@/mixins/stories/form-fields'
import { boolean, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import icons from 'feather-icons/dist/icons.json'
import { SFormField } from '@/components/SFormField'

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
            isInline: boolean('is-inline', false, 'Optional Props'),
            isFullwidth: boolean('is-fullwidth', false, 'Optional Props'),
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
  .add(
    'Input with icons',
    () => ({
      render(h) {
        return (
          <div>
            <SHeading>Input with icons</SHeading>
            <p>Colors can be provided for each icon.</p>
            <SFormField>
              <SInput icon-left="activity" id="icon-l" name="icon-l" label="Input" />
            </SFormField>
            <SFormField>
              <SInput icon-right="activity" id="icon-r" name="icon-r" label="Input" />
            </SFormField>
            <SFormField>
              <SInput
                icon-left="activity"
                icon-right="activity"
                id="icon-b"
                name="icon-b"
                label="Input"
              />
            </SFormField>
          </div>
        )
      }
    }),
    {
      options: {
        showPanel: false
      }
    }
  )
