import { SToast } from '@/components/SToast'
import { SHeading } from '@/components/SHeading'
import { SButton } from '@/components/SButton'
import PropList from '@/docs/PropList'
import StoryContainer from '@/docs/StoryContainer'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import { toastTypes, positions } from './options'

const upperCase = str => str[0].toUpperCase() + str.substr(1)

storiesOf('Components/SToast', module).add('SToast', () => {
  return {
    props: {
      props: {
        default: () => ({
          toastType: select('toast-type', toastTypes, toastTypes[0], 'Optional Props'),
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
        })
      }
    },

    data() {
      return {
        toastCount: 0,
        toastList: [...toastTypes].reverse()
      }
    },

    methods: {
      mountToasts() {
        if (this.toastCount > 0) return

        this.toastList.forEach(type => {
          this.$toast.open({
            toastType: type,
            containerParent: '#all-toasts',
            toastBody: 'Type: ' + upperCase(type || 'default'),
            isIndefinite: true,
            action: () => this.toastCount--
          })

          this.toastCount++
        })
      }
    },

    mounted() {
      // without actions
      this.toastList.forEach(type => {
        this.$toast.open({
          toastType: type,
          containerParent: '#all-toasts',
          toastBody: 'Type: ' + upperCase(type || 'default'),
          isIndefinite: true
        })
      })

      // with actions
      this.mountToasts()
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
          <p>
            <code>{'<SToast />'}</code> is registered programattically. To use it, call{' '}
            <code>this.$toast.open()</code>.
          </p>

          <SHeading level="2">Example</SHeading>

          <div id="example" style={exampleContainerStyle}>
            <SButton outline-color="spartan_blue" onClick={() => this.$toast.open(props)}>
              Open a toast
            </SButton>
          </div>

          <SHeading level="3">All toasts</SHeading>

          <div id="all-toasts" style={{ ...exampleContainerStyle, height: '41em' }}>
            <SButton
              outline-color="spartan_blue"
              onClick={this.mountToasts}
              disabled={this.toastCount !== 0}
            >
              Reset toasts
            </SButton>
          </div>

          {SToast.props && <PropList component={SToast} />}
        </StoryContainer>
      )
    }
  }
})
