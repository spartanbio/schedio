import { SHeading } from '@/components/SHeading'
import { colors as iconColors } from '@/components/SIcon/options'
import { SSelect } from '@/components/SSelect'
import { withAttrsAsProps, withUnboundAttrs } from '@/mixins/stories/form-fields'
import PropList from '@@/docs/components/PropList'
import { boolean, select, text } from '@storybook/addon-knobs'
import icons from 'feather-icons/dist/icons.json'

const iconList = Object.keys(icons)
const iconProp = side => select(`icon-${side}`, ['', ...iconList], '', 'Optional Props')
const iconColor = side =>
  select(`icon-${side}-color`, ['', ...iconColors], 'green', 'Optional Props')

export default {
  title: 'Components/Inputs.SSelect',

  parameters: {
    jest: 'SSelect',
  },
}

export const selectBox = () => {
  const object1 = { label: 'Option 1', value: 'option1' }
  const object2 = { label: 'Option 2', value: 'option2' }
  const object3 = { label: 'Option 3', value: 'option3' }
  const object4 = { label: 'Option 4', value: 'option4' }
  const objectOfObjects = { object1, object2, object3, object4 }
  const arrayOfObjects = Object.values(objectOfObjects)
  const arrayOfStrings = arrayOfObjects.map(obj => obj.label)

  const labelledArraysOfObjects = {
    'Group 1': [{ label: 'Group 1 option label', value: 'Group 1 option value' }],
    'Group 2': [{ label: 'Group 2 option label', value: 'Group 2 option value' }],
    'Group 3': [{ label: 'Group 3 option label', value: 'Group 3 option value' }],
    'Group 4': [{ label: 'Group 4 option label', value: 'Group 4 option value' }],
  }

  const optionTypes = {
    'Object of objects': objectOfObjects,
    'Array of objects': arrayOfObjects,
    'Array of strings': arrayOfStrings,
    'Labelled arrays of objects': labelledArraysOfObjects,
  }

  // enable setting of option structure.
  const optionKeys = Object.keys(optionTypes)
  const optionsObj = optionKeys.reduce((o, k) => ({ ...o, [k]: k }), {})
  const options = select('select-options', optionsObj, optionKeys[0], 'Required Props')

  return {
    props: {
      props: {
        default: () => ({
          ...withAttrsAsProps({
            id: 'base-select',
            name: 'base-select',
            label: 'Select',
          }),
          placeholder: text('placeholder', 'Select an option', 'Optional Props'),
          selectOptions: optionTypes[options],
          multiple: boolean('multiple', false, 'Optional Props'),
          isInline: boolean('is-inline', false, 'Optional Props'),
          isFullwidth: boolean('is-fullwidth', false, 'Optional Props'),
          iconLeft: iconProp('left'),
          iconLeftColor: iconColor('left'),
          iconRight: iconProp('right'),
          iconRightColor: iconColor('right'),
        }),
      },
      attrs: {
        default: withUnboundAttrs(),
      },
    },
    render (h) {
      const { props, attrs } = this.$props

      return (
        <div>
          <SHeading level="1">Select</SHeading>
          <p>
            Selects provide a list of options to choose from. They can be set to allow selection of
            none, one or many options.
          </p>
          <p>A select's options can have the following structures:</p>
          <ul>
            {optionKeys.map(key => (
              <li>{key}</li>
            ))}
          </ul>

          <SHeading level="2">Example</SHeading>
          <SSelect {...{ props }} {...{ attrs }} />

          <SHeading level="3" style="text-transform: none;">
            selectOptions:
          </SHeading>
          <pre>{JSON.stringify(props.selectOptions, '', 2)}</pre>

          <PropList component={SSelect} />
        </div>
      )
    },
  }
}

select.story = {
  name: 'Select',
}

export const standardSelect = () => ({
  render (h) {
    const options = ['Option 1', 'Option 2', 'Option 3']
    return (
      <div>
        <SHeading>Standard Select</SHeading>

        <SHeading level="2">Base</SHeading>
        <SSelect id="select" name="select" label="select" select-options={options} />

        <SHeading level="2">Icons</SHeading>
        <p>Colors can also be provided for each icon.</p>
        <SFormField>
          <SSelect
            id="select-icon-l"
            name="select-icon-l"
            label="select"
            select-options={options}
            icon-left="activity"
          />
        </SFormField>
        <SFormField>
          <SSelect
            id="select-icon-r"
            name="select-icon-r"
            label="select"
            select-options={options}
            icon-right="activity"
          />
        </SFormField>
        <SFormField>
          <SSelect
            id="select-icon-b"
            name="select-icon-b"
            label="select"
            select-options={options}
            icon-left="activity"
            icon-right="activity"
          />
        </SFormField>
      </div>
    )
  },
})

standardSelect.story = {
  name: 'Standard Select',

  parameters: {
    options: {
      showPanel: false,
    },
  },
}

export const multipleSelect = () => ({
  render (h) {
    const options = ['Option 1', 'Option 2', 'Option 3']
    return (
      <div>
        <SHeading>Multiple Select</SHeading>

        <SHeading level="2">Base</SHeading>
        <SSelect id="select" name="select" label="select" select-options={options} />

        <SHeading level="2">Icons</SHeading>
        <p>Colors can also be provided for each icon.</p>
        <SFormField>
          <SSelect
            id="select-icon-l"
            name="select-icon-l"
            label="select"
            select-options={options}
            icon-left="activity"
            multiple
          />
        </SFormField>
        <SFormField>
          <SSelect
            id="select-icon-r"
            name="select-icon-r"
            label="select"
            select-options={options}
            icon-right="activity"
            multiple
          />
        </SFormField>
        <SFormField>
          <SSelect
            id="select-icon-b"
            name="select-icon-b"
            label="select"
            select-options={options}
            icon-left="activity"
            icon-right="activity"
            multiple
          />
        </SFormField>
      </div>
    )
  },
})

multipleSelect.story = {
  name: 'Multiple Select',

  parameters: {
    options: {
      showPanel: false,
    },
  },
}
