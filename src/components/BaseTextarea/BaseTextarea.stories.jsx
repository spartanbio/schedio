import BaseHeading from '@/components/BaseHeading'
import BaseTextarea from '@/components/BaseTextarea'
import PropList from '@/components/_docs/PropList'
import StoryContainer from '@/components/_docs/StoryContainer'
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Base Components/BaseTextarea', module)
  .addDecorator(withKnobs)
  .add('Textarea', () => {
    const props = {
      id: text('ID', 'base-textarea', 'Required props'),
      name: text('Name', 'base-textarea', 'Required props'),
      placeholder: text('Placeholder', 'Placeholder text', 'Required props'),
      isInline: boolean('isInline', false, 'Optional props'),
      label: text('Label', 'Label text', 'Required props')
    }
    const isDisabled = boolean('isDisabled', false, '$attrs')
    const numberOfRows = number('Rows (default: 10)', 10, {}, '$attrs')

    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">Textarea</BaseHeading>
          <p>Textareas are used to collect user provided text data is relatively long.</p>

          <BaseHeading level="2">Example</BaseHeading>
          <BaseTextarea {...{ props }} disabled={isDisabled} rows={numberOfRows} />

          <PropList component={BaseTextarea} />
        </StoryContainer>
      )
    }
  })
