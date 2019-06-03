import { SFileInput } from '@/components/SFileInput'
import { SCallout } from '@/components/SCallout'
import { SHeading } from '@/components/SHeading'
import PropList from '@/docs/PropList'
import { storiesOf } from '@storybook/vue'
import { boolean, number } from '@storybook/addon-knobs'
import { withAttrsAsProps } from '@/mixins/stories/form-fields'

storiesOf('Components/Inputs.SFileInput', module)
  .addParameters({ jest: 'SFileInput' })
  .add('SFileInput', () => {
    return {
      data() {
        return {
          errors: [],
          files: []
        }
      },

      props: {
        props: {
          default: () => ({
            ...withAttrsAsProps({ id: 'file-input', name: 'file-input', label: 'File input' }),
            maxSize: number('max-size', 0, '', 'Optional Props'),
            isDroppable: boolean('is-droppable', false, 'Optional Props'),
            hideCount: boolean('hide-count', false, 'Optional Props'),
            isInline: boolean('is-inline', false, 'Optional Props')
          })
        },

        attrs: {
          default: {
            disabled: boolean('disabled', false, '$attrs'),
            multiple: boolean('multiple', false, '$attrs')
          }
        }
      },
      render(h) {
        const { props, attrs } = this.$props

        return (
          <div>
            <SHeading level="1">SFileInput</SHeading>
            <p>
              This component allows uses to submit files. The <code>is-droppable</code> prop enables
              drag-and-drop functionality.
            </p>
            <p>
              <code>SFileInput</code> can be used with <code>v-model</code>. It will emit an
              <code>input</code> event with an array of files as its payload.
            </p>

            <SHeading level="2">Example</SHeading>
            <SFileInput
              {...{ props }}
              {...{ attrs }}
              onError={evt => (this.errors = evt.payload)}
              onInput={evt => (this.files = evt)}
              files={this.files}
            />

            {!!this.errors.length && (
              <div>
                <SFormValidation>
                  Example error handling
                  <pre class="text--color-red">{JSON.stringify(this.errors, null, 2)}</pre>
                </SFormValidation>
                <p>
                  Error handler: <code>evt => (this.errors = evt.payload)</code>
                </p>
              </div>
            )}

            <SCallout>
              Note that the <code>max-size</code> prop is specified in bytes.
            </SCallout>

            <SHeading level="2">Validation</SHeading>
            <p>
              <code>SFileInput</code> provides limited validation for maximum file size and
              duplicate file names, but no more. On a validation error, it emits an{' '}
              <code>error</code> event, and you have to handle reporting the error to the user
              yourself. The event looks like this:
            </p>
            <pre>
              {`\
{
  payload: [
    {
      name: 'Failed file',
      reasons: ['exceeds max size', 'duplicate name']
    },
    ...moreFiles
  ]
}`}
            </pre>

            {SFileInput.props && <PropList component={SFileInput} />}
          </div>
        )
      }
    }
  })
