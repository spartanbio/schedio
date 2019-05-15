import { SHeading } from '@/components/SHeading'
import { colors as iconColors } from '@/components/SIcon/options'
import { STextarea } from '@/components/STextarea'
import PropList from '@/docs/PropList'
import { withAttrsAsProps, withUnboundAttrs } from '@/mixins/stories/form-fields'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import icons from 'feather-icons/dist/icons.json'

const iconList = Object.keys(icons)
const iconProp = side => select(`icon-${side}`, ['', ...iconList], '', 'Optional Props')
const iconColor = side =>
  select(`icon-${side}-color`, ['', ...iconColors], 'green', 'Optional Props')

storiesOf('Components/Inputs.STextarea', module)
  .addParameters({ jest: 'STextarea' })
  .add('Textarea', () => {
    return {
      props: {
        props: {
          default: () => ({
            ...withAttrsAsProps({
              id: 'base-textarea',
              name: 'base-textarea',
              label: 'Base Textarea'
            }),
            placeholder: text('placeholder', 'Placeholder text', 'Required Props'),
            isInline: boolean('is-inline', false, 'Optional Props'),
            iconLeft: iconProp('left'),
            iconLeftColor: iconColor('left'),
            iconRight: iconProp('right'),
            iconRightColor: iconColor('right')
          })
        },

        attrs: {
          default: () => ({
            ...withUnboundAttrs(),
            numberOfRows: number('rows (default: 10)', 10, {}, '$attrs')
          })
        }
      },
      render(h) {
        const { props, attrs } = this.$props

        return (
          <div>
            <SHeading level="1">Textarea</SHeading>
            <p>Textareas are used to collect user provided text data is relatively long.</p>

            <SHeading level="2">Example</SHeading>
            <STextarea {...{ props }} {...{ attrs }} />

            <PropList component={STextarea} />
          </div>
        )
      }
    }
  })
