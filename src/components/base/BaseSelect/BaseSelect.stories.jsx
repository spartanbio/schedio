import { select, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import BaseSelect from '@/components/base/BaseSelect'

storiesOf('Components/BaseSelect', module)
  .addDecorator(withKnobs)
  .add('BaseSelect', () => {
    const object1 = { label: 'Option 1', value: 'option1' }
    const object2 = { label: 'Option 2', value: 'option2' }
    const object3 = { label: 'Option 3', value: 'option3' }
    const objectOfObjects = { object1, object2, object3 }
    const arrayOfObjects = Object.values(objectOfObjects)
    const arrayOfStrings = arrayOfObjects.map(obj => obj.label)

    const optionTypes = {
      'Object of objects': objectOfObjects,
      'Array of objects': arrayOfObjects,
      'Array of strings': arrayOfStrings
    }

    // workaround for storybook converting everything to strings
    const options = select(
      'selectOptions',
      Object.keys(optionTypes),
      Object.keys(optionTypes)[0],
      'Required'
    )

    const props = {
      id: 'base-select',
      name: 'base-select',
      selectOptions: optionTypes[options]
    }

    return {
      render: h => (
        <div>
          <BaseSelect {...{ props }}>Label text</BaseSelect>
          <p>selectOptions:</p>
          <pre>{JSON.stringify(optionTypes[options], '', 2)}</pre>
        </div>
      )
    }
  })
