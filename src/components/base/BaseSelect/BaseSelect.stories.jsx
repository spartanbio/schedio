import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import BaseSelect from '@/components/base/BaseSelect'

storiesOf('Components/BaseSelect', module)
  .addDecorator(withKnobs)
  .add('BaseSelect', () => {
    const object1 = { label: 'Option 1', value: 'option1' }
    const object2 = { label: 'Option 2', value: 'option2' }
    const object3 = { label: 'Option 3', value: 'option3' }
    const object4 = { label: 'Option 4', value: 'option4' }
    const objectOfObjects = { object1, object2, object3, object4 }
    const arrayOfObjects = Object.values(objectOfObjects)
    const arrayOfStrings = arrayOfObjects.map(obj => obj.label)
    const optionTypes = {
      'Object of objects': objectOfObjects,
      'Array of objects': arrayOfObjects,
      'Array of strings': arrayOfStrings
    }
    const optionKeys = Object.keys(optionTypes)

    // workaround for storybook converting everything to strings
    const options = select('selectOptions', optionKeys, optionKeys[0], 'Required')
    const props = {
      id: text('id', 'base-select', 'Required'),
      name: text('name', 'base-select', 'Required'),
      multiple: boolean('Multiple', false, 'Optional'),
      selectOptions: optionTypes[options],
      isInline: boolean('isInline', false, 'Optional'),
      isFullwidth: boolean('isFullwidth', false, 'Optional')
    }
    const labelText = text('Label text', 'Label text', 'Required')
    const isDisabled = boolean('Disabled', false, 'Optional')

    return {
      render: h => (
        <div>
          <BaseSelect {...{ props }} disabled={isDisabled}>
            {labelText}
          </BaseSelect>
          <p>selectOptions:</p>
          <pre>{JSON.stringify(optionTypes[options], '', 2)}</pre>
        </div>
      )
    }
  })
