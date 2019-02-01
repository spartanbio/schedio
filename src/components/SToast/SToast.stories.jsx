import { SToast } from '@/components/SToast'
import { SHeading } from '@/components/SHeading'
import { SButton } from '@/components/SButton'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import { toastTypes } from './options'

const exampleContainerStyle = {
  minHeight: '12em',
  position: 'relative',
  padding: '1em',
  backgroundColor: '#f2f5f7'
}

storiesOf('Components/SToast', module)
  .addDecorator(withKnobs)
  .add('SToast', () => {
    return {
      props: {
        props: {
          default: {
            toastType: select('toast-type', toastTypes, toastTypes[0], 'Optional Props'),
            toastTitle: text('toast-title', '', 'Optional Props'),
            toastBody: text('toast-body', 'Some text', 'Optional Props'),
            action: () => alert('You did something!')
          }
        },
        title: { default: text('title', '', 'Slots') },
        body: { default: text('default', '', 'Slots') }
      },

      data() {
        return {
          toastIsShowing: false
        }
      },

      methods: {
        showToast() {
          this.toastIsShowing = true
          setTimeout(() => (this.toastIsShowing = false), 6000)
        }
      },
      render(h) {
        const { props, ...slots } = this.$props

        return (
          <StoryContainer>
            <SHeading level="1">SToast</SHeading>
            <p>Describe the component here</p>

            <SHeading level="2">Example</SHeading>

            <div style={exampleContainerStyle}>
              <div>
                <p>Toasts sit at the bottom of their parent element.</p>
                <SButton onclick={this.showToast}>Open a toast</SButton>
              </div>

              {this.toastIsShowing && (
                <SToast {...{ props }}>
                  <template slot="title">{slots.title}</template>

                  {slots.body}
                </SToast>
              )}
            </div>

            {SToast.props && <PropList component={SToast} />}
          </StoryContainer>
        )
      }
    }
  })
