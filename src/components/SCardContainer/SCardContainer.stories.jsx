import { SCardContainer } from '@/components/SCardContainer'
import { SHeading } from '@/components/SHeading'
import PropList from '@/docs/PropList'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

storiesOf('Components/Layout.SCard', module)
  .addParameters({ jest: 'SCardContainer' })
  .add('SCardContainer', () => {
    return {
      props: {
        slotContent: { default: text('default', 'This is a SCardContainer!', 'Slots') }
      },
      render(h) {
        return (
          <div>
            <SHeading level="1">Card Container</SHeading>
            <p>Creates a container that also looks like a card.</p>

            <SHeading level="2">Example</SHeading>
            <SCardContainer>{this.slotContent}</SCardContainer>

            {SCardContainer.props && <PropList component={SCardContainer} />}
          </div>
        )
      }
    }
  })
