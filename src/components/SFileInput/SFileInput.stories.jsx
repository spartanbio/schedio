import { SFileInput } from '@/components/SFileInput'
import { SCallout } from '@/components/SCallout'
import { SHeading } from '@/components/SHeading'
import PropList from '@/docs/PropList'
import { storiesOf } from '@storybook/vue'
import { boolean, number, select } from '@storybook/addon-knobs'
import { withAttrsAsProps } from '@/mixins/stories/form-fields'
import { types } from './options'

storiesOf('Components/Inputs.SFileInput', module)
  .addParameters({ jest: 'SFileInput' })
  .add('SFileInput', () => {
    return {
      data() {
        return {
          errors: []
        }
      },

      props: {
        props: {
          default: () => ({
            ...withAttrsAsProps({ id: 'file-input', name: 'file-input', label: 'File input' }),
            maxSize: number('max-size', 0, '', 'Optional Props'),
            type: select('type', types, types[0], 'Optional Props'),
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
              This component allows uses to submit files. It provides limited validation for maximum
              file size and duplicate file names, but no more.
            </p>
            <p>
              On a validation error, it emits an <code>error</code> event, and you have to handle
              reporting the error to the user yourself. The event looks like this:
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

            <SHeading level="2">Example</SHeading>
            <SFileInput
              {...{ props }}
              {...{ attrs }}
              onerror={evt => (this.errors = evt.payload)}
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

            {SFileInput.props && <PropList component={SFileInput} />}
          </div>
        )
      }
    }
  })
