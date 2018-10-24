import BaseHeading from '@/components/BaseHeading'
import BaseTextarea from '@/components/BaseTextarea'
import { withAttrsAsProps, withUnboundAttrs } from '@/mixins/stories/form-fields'
import PropList from '@/components/_docs/PropList'
import StoryContainer from '@/components/_docs/StoryContainer'
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Base Components/BaseTextarea', module)
  .addDecorator(withKnobs)
  .add('Textarea', () => {
    const props = {
      ...withAttrsAsProps({ id: 'base-textarea', name: 'base-textarea', label: 'Base Textarea' }),
      placeholder: text('Placeholder', 'Placeholder text', 'Required Props'),
      isInline: boolean('isInline', false, 'Optional Props')
    }

    const attrs = {
      ...withUnboundAttrs(),
      numberOfRows: number('rows (default: 10)', 10, {}, '$attrs')
    }

    return {
      render: h => (
        <StoryContainer>
          <BaseHeading level="1">Textarea</BaseHeading>
          <p>Textareas are used to collect user provided text data is relatively long.</p>

          <BaseHeading level="2">Example</BaseHeading>
          <BaseTextarea {...{ props }} {...{ attrs }} />

          <PropList component={BaseTextarea} />
        </StoryContainer>
      )
    }
  })
