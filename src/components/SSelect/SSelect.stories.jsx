import { SHeading } from '@/components/SHeading'
import { SSelect } from '@/components/SSelect'
import { withAttrsAsProps, withUnboundAttrs } from '@/mixins/stories/form-fields'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/SSelect', module)
  .addDecorator(withKnobs)
  .add('SSelect', () => {
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
      'Group 4': [{ label: 'Group 4 option label', value: 'Group 4 option value' }]
    }

    const optionTypes = {
      'Object of objects': objectOfObjects,
      'Array of objects': arrayOfObjects,
      'Array of strings': arrayOfStrings,
      'Labelled arrays of objects': labelledArraysOfObjects
    }

    // enable setting of option structure.
    const optionKeys = Object.keys(optionTypes)
    const optionsObj = optionKeys.reduce((o, k) => ({ ...o, [k]: k }), {})
    const options = select('selectOptions', optionsObj, optionKeys[0], 'Required Props')

    return {
      props: {
        props: {
          default: {
            ...withAttrsAsProps({
              id: 'base-select',
              name: 'base-select',
              label: 'Select'
            }),
            placeholder: text('Placeholder', 'Select an option', 'Optional Props'),
            selectOptions: optionTypes[options],
            multiple: boolean('Multiple', false, 'Optional Props'),
            isInline: boolean('isInline', false, 'Optional Props'),
            isFullwidth: boolean('isFullwidth', false, 'Optional Props')
          }
        },
        attrs: {
          default: withUnboundAttrs()
        }
      },
      render(h) {
        const { props, attrs } = this.$props

        return (
          <StoryContainer>
            <SHeading level="1">Select</SHeading>
            <p>
              Selects provide a list of options to choose from. They can be set to allow selection
              of none, one or many options.
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
          </StoryContainer>
        )
      }
    }
  })
