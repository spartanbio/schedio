import { storiesOf } from '@storybook/vue'
import BaseCheckbox from '@/components/base/BaseCheckbox'
// TODO: knobs

storiesOf('Components/BaseCheckbox', module).add('Checkbox', () => {
  return {
    render: h => (
      <div>
        <BaseCheckbox id="text" label="BaseCheckbox">
          Text
        </BaseCheckbox>
      </div>
    )
  }
})
