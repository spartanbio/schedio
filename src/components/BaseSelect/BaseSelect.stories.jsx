import BaseHeading from '@/components/BaseHeading'
import BaseSelect from '@/components/BaseSelect'
import { withAttrsAsProps, withUnboundAttrs } from '@/mixins/stories/form-fields'
import PropList from '@/components/_docs/PropList'
import StoryContainer from '@/components/_docs/StoryContainer'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Base Components/BaseSelect', module)
  .addDecorator(withKnobs)
  .add('BaseSelect', () => {
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
    const options = select('selectOptions', optionKeys, optionKeys[0], 'Required Props')
    const props = {
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
    const attrs = withUnboundAttrs()

    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">Select</BaseHeading>
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

          <BaseHeading level="2">Example</BaseHeading>
          <BaseSelect {...{ props }} {...{ attrs }} />

          <BaseHeading level="3" style="text-transform: none;">
            selectOptions:
          </BaseHeading>
          <pre>{JSON.stringify(optionTypes[options], '', 2)}</pre>

          <PropList component={BaseSelect} />
        </StoryContainer>
      )
    }
  })
