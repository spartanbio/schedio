import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import BaseContainer from '@/components/BaseContainer'
import BaseContainerRow from '@/components/BaseContainer/BaseContainerRow.vue'
import BaseContainerColumn from '@/components/BaseContainer/BaseContainerColumn.vue'

storiesOf('Base Components/BaseContainer', module)
  .addDecorator(withKnobs)
  .add('BaseContainer', () => {
    return {
      render: h => (
        <BaseContainer>
          <BaseContainerRow>
            <BaseContainerColumn class="column--1" md sm="12" offset="1" order-sm="last">
              content
            </BaseContainerColumn>
          </BaseContainerRow>
        </BaseContainer>
      )
    }
  })
