import { storiesOf } from '@storybook/vue'
import BaseInput from '@/components/base/BaseInput'
// TODO: knobs
storiesOf('Components/BaseInput', module).add('Input', () => {
  return {
    render: h => (
      <div>
        <BaseInput id="text" placeholder="Placeholder text" label="BaseInput" type="url">
          Text
        </BaseInput>
      </div>
    )
  }
})
