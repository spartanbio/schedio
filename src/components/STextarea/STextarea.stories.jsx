import { SHeading } from '@/components/SHeading'
import { colors as iconColors } from '@/components/SIcon/options'
import { STextarea } from '@/components/STextarea'
import PropList from '@@/docs/components/PropList'
import { withAttrsAsProps, withUnboundAttrs } from '@/mixins/stories/form-fields'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import icons from 'feather-icons/dist/icons.json'

const iconList = Object.keys(icons)
const iconProp = side => select(`icon-${side}`, ['', ...iconList], '', 'Optional Props')
const iconColor = side =>
  select(`icon-${side}-color`, ['', ...iconColors], 'green', 'Optional Props')

export default {
  title: 'Components/Inputs.STextarea',

  parameters: {
    jest: 'STextarea',
  },
}

export const textarea = () => ({
  props: {
    props: {
      default: () => ({
        ...withAttrsAsProps({
          id: 'base-textarea',
          name: 'base-textarea',
          label: 'Base Textarea',
        }),
        placeholder: text('placeholder', 'Placeholder text', 'Required Props'),
        isInline: boolean('is-inline', false, 'Optional Props'),
        iconLeft: iconProp('left'),
        iconLeftColor: iconColor('left'),
        iconRight: iconProp('right'),
        iconRightColor: iconColor('right'),
      }),
    },

    attrs: {
      default: () => ({
        ...withUnboundAttrs(),
        numberOfRows: number('rows (default: 10)', 10, {}, '$attrs'),
      }),
    },
  },
  render (h) {
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
  },
})

textarea.story = {
  name: 'Textarea',
}

export const textareaWithIcons = () => ({
  render (h) {
    return (
      <div>
        <SHeading>Textarea with icons</SHeading>
        <p>Colors can be provided for each icon.</p>
        <SFormField>
          <STextarea icon-left="activity" id="icon-l" name="icon-l" label="Textarea" />
        </SFormField>
        <SFormField>
          <STextarea icon-right="activity" id="icon-r" name="icon-r" label="Textarea" />
        </SFormField>
        <SFormField>
          <STextarea
            icon-left="activity"
            icon-right="activity"
            id="icon-b"
            name="icon-b"
            label="Textarea"
          />
        </SFormField>
      </div>
    )
  },
})

textareaWithIcons.story = {
  name: 'Textarea with icons',

  parameters: {
    options: {
      showPanel: false,
    },
  },
}
