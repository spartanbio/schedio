import { SToast } from '@/components/SToast'
import { SHeading } from '@/components/SHeading'
import { SButton } from '@/components/SButton'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { boolean, number, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import { toastTypes, positions } from './options'

storiesOf('Components/SToast', module)
  .addDecorator(withKnobs)
  .add('SToast', () => {
    return {
      props: {
        props: {
          default: {
            toastType: select('toast-type', toastTypes, toastTypes[0], 'Required Props'),
            containerParent: text('container-parent', '#example', 'Optional Props'),
            toastBody: text('toast-body', 'Some text', 'Optional Props'),
            position: select('position', positions, positions[0], 'Optional Props'),
            actionText: text('action-text', 'Run an action', 'Optional Props'),
            toastTitle: text('toast-title', '', 'Optional Props'),
            hasIcon: boolean('has-icon', true, 'Optional Props'),
            isIndefinite: boolean('is-indefinite', false, 'Optional Props'),
            duration: number('duration', 3000, {}, 'Optional Props'),

            action() {
              setTimeout(() => {
                this.$toast.open({
                  containerParent: '#example',
                  toastBody: 'The action ran',
                  toastType: 'warning'
                })
              }, 750)
            }
          }
        }
      },

      render(h) {
        const { props } = this.$props
        const exampleContainerStyle = {
          minHeight: '12em',
          position: 'relative',
          padding: '1em',
          backgroundColor: '#f2f5f7'
        }

        return (
          <StoryContainer>
            <SHeading level="1">SToast</SHeading>
            <p>
              Toasts are quick notifications, usually indicating the status of an action. They can
              also be used to trigger another action. To do so, just pass a function to the{' '}
              <code>action</code> prop.
            </p>

            <SHeading level="2">Example</SHeading>

            <div id="example" style={exampleContainerStyle}>
              <SButton outline-color="night" onclick={() => this.$toast.open(props)}>
                Open a toast
              </SButton>
            </div>

            {SToast.props && <PropList component={SToast} />}
          </StoryContainer>
        )
      }
    }
  })
