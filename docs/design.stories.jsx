import { SHeading } from '@/components/SHeading'
import Color from '@@/docs/Color'
import ColorAccessibility from '@@/docs/Color/ColorAccessibility'
import Graphics from '@@/docs/Graphics'
import Interaction from '@@/docs/InteractionStates'
import Spacing from '@@/docs/Spacing'
import TypographyBase from '@@/docs/Typography/TypographyBase'
import TypographyHeadings from '@@/docs/Typography/TypographyHeadings'
import TypographyPrint from '@@/docs/Typography/TypographyPrint.vue'
import { storiesOf, addParameters } from '@storybook/vue'

const hideAddons = {
  options: {
    showPanel: false
  }
}

storiesOf('* Design/Assets', module)
  .addParameters(hideAddons)
  .add('Design Assets', () => ({
    render(h) {
      return (
        <div>
          <SHeading>Design assets</SHeading>

          <p>
            The latest version of that file can be found on Spartan's server at{' '}
            <code>S:\Sales & Marketing\Marketing and UI\</code>
          </p>
        </div>
      )
    }
  }))

storiesOf('* Design/Color', module)
  .addParameters(hideAddons)
  .add('Color', () => ({ render: h => <Color /> }))
  .add('Accessibility', () => ({ render: h => <ColorAccessibility /> }), hideAddons)

storiesOf('* Design/Interaction', module).add('Interaction', () => ({
  render: h => <Interaction />
}))

storiesOf('* Design/Graphics', module)
  .addParameters(hideAddons)
  .add('Graphics', () => ({ render: h => <Graphics /> }))

storiesOf('* Design/Spacing', module)
  .addParameters(hideAddons)
  .add('Spacing', () => ({ render: h => <Spacing /> }))

storiesOf('* Design/Typography', module)
  .addParameters(hideAddons)
  .add('Base', () => ({ render: h => <TypographyBase /> }))
  .add('Headings & Displays', () => ({ render: h => <TypographyHeadings /> }))
  .add('Print', () => ({ render: h => <TypographyPrint /> }))
