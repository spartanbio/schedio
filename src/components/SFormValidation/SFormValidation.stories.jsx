import { SFormValidation } from '@/components/SFormValidation'
import { SHeading } from '@/components/SHeading'
import PropList from '@@/docs/components/PropList'
import { boolean, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import { states } from './options'
import icons from 'feather-icons/dist/icons.json'
import { SInput } from '@/components/SInput'
import { SFormField } from '../SFormField/index'
import jeffsum from 'jeffsum'
import { generateHeading } from '@/utils/stories/render-functions'

storiesOf('Components/Forms.SFormValidation', module)
  .addParameters({ jest: 'SFormValidation' })
  .add('Form Validation', () => {
    return {
      props: {
        props: {
          default: () => ({
            text: text('text', 'validation text', 'Optional Props'),
            state: select('state', states, 'error', 'Optional Props'),
            icon: select('icon', ['', ...Object.keys(icons)], '', 'Optional Props'),
            hideIcon: boolean('hide-icon', false, 'Optional Props'),
          }),
        },
      },

      data () {
        return {
          inputOneValidity: null,
          shouldRespondInvalid: false,
          formValidity: null,
        }
      },

      methods: {
        handleSubmit (e) {
          e.preventDefault()
          this.formValidity = this.shouldRespondInvalid ? false : this.inputOneValidity
        },
      },
      render (h) {
        const { props } = this.$props

        return (
          <div>
            <SHeading level="1">Form Validation</SHeading>
            <p>
              The form validation component is to provides feedback on the validity of forms or
              their inputs. <code>{'<SFormValidation />'}</code> should be wrapped in the same{' '}
              <code>{'<SFormField />'}</code> as the element it is represeting.
            </p>

            <SHeading level="2">Standalone Example</SHeading>

            <SFormValidation {...{ props }} />

            <SHeading level="2">Usage Example</SHeading>

            <p>
              The input below will display validation messages on blur or keyup. The whole form will
              validate, based on the input and switch, when the button is pressed.
            </p>

            <form autocomplete="off" onsubmit={this.handleSubmit.bind(this)}>
              <SFormField>
                <SInput
                  id="email"
                  name="email"
                  label="Email address"
                  placeholder="email@domain.tld"
                  type="email"
                  onkeyup={(e) => { this.inputOneValidity = e.target.validity.valid }}
                  onblur={(e) => { this.inputOneValidity = e.target.validity.valid }}
                />

                <SFormValidation
                  v-show={this.inputOneValidity !== null}
                  state={this.inputOneValidity ? 'success' : 'error'}
                  text={this.inputOneValidity ? 'Valid!' : "That's not a valid email"}
                />
              </SFormField>

              <SFormField>
                <SSwitch
                  id="show-invalid"
                  name="show-invalid"
                  label="Respond as invalid"
                  value={this.shouldRespondInvalid}
                  oninput={(e) => { this.shouldRespondInvalid = e }}
                  required={false}
                  hideOptional={true}
                />
              </SFormField>

              <SFormField>
                <SButton button-color="green" disabled={!this.inputOneValidity}>
                  Validate the form
                </SButton>

                <SFormValidation
                  v-show={this.formValidity !== null}
                  state={this.formValidity ? 'success' : 'error'}
                  text={this.formValidity ? 'Valid!' : "The form's not valid"}
                />
              </SFormField>
            </form>

            {SFormValidation.props && <PropList component={SFormValidation} />}
          </div>
        )
      },
    }
  })
  .add(
    'Form Validation States',
    () => ({
      render (h) {
        return (
          <div>
            <SHeading>Form Validation States</SHeading>

            {states.map(state => generateValidations(h, state))}
          </div>
        )
      },
    }),
    {
      options: {
        showPanel: false,
      },
    }
  )

function generateValidations (h, state) {
  return [
    generateHeading(h, { level: 2, content: state || 'Base' }),
    h(SFormValidation, { props: { state, text: jeffsum(2) } }),
  ]
}
