import { SHeading } from '@/components/SHeading'
import { STextarea } from '@/components/STextarea'
import { withAttrsAsProps, withUnboundAttrs } from '@/mixins/stories/form-fields'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/STextarea', module)
  .addDecorator(withKnobs)
  .add('Textarea', () => {
    return {
      props: {
        props: {
          default: {
            ...withAttrsAsProps({
              id: 'base-textarea',
              name: 'base-textarea',
              label: 'Base Textarea'
            }),
            placeholder: text('Placeholder', 'Placeholder text', 'Required Props'),
            isInline: boolean('isInline', false, 'Optional Props')
          }
        },

        attrs: {
          default: {
            ...withUnboundAttrs(),
            numberOfRows: number('rows (default: 10)', 10, {}, '$attrs')
          }
        }
      },
      render(h) {
        const { props, attrs } = this.$props

        return (
          <StoryContainer>
            <SHeading level="1">Textarea</SHeading>
            <p>Textareas are used to collect user provided text data is relatively long.</p>

            <SHeading level="2">Example</SHeading>
            <STextarea {...{ props }} {...{ attrs }} />

            <PropList component={STextarea} />
          </StoryContainer>
        )
      }
    }
  })
