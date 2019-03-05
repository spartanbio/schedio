import Color from '@/docs/Color'
import Graphics from '@/docs/Graphics.vue'
import Interaction from '@/docs/InteractionStates.vue'
import Spacing from '@/docs/Spacing.vue'
import TypographyBase from '@/docs/Typography/TypographyBase.vue'
import TypographyHeadings from '@/docs/Typography/TypographyHeadings.vue'
import TypographyPrint from '@/docs/Typography/TypographyPrint.vue'
import { storiesOf } from '@storybook/vue'

const hideAddons = {
  options: {
    showPanel: false
  }
}

storiesOf('* Design/Color', module).add('Color', () => ({ render: h => <Color /> }), hideAddons)
storiesOf('* Design/Interaction', module).add(
  'Interaction',
  () => ({ render: h => <Interaction /> }),
  hideAddons
)

storiesOf('* Design/Graphics', module).add(
  'Graphics',
  () => ({ render: h => <Graphics /> }),
  hideAddons
)

storiesOf('* Design/Spacing', module).add(
  'Spacing',
  () => ({ render: h => <Spacing /> }),
  hideAddons
)

storiesOf('* Design/Typography', module)
  .add('Base', () => ({ render: h => <TypographyBase /> }), hideAddons)
  .add('Headings & Displays', () => ({ render: h => <TypographyHeadings /> }), hideAddons)
  .add('Print', () => ({ render: h => <TypographyPrint /> }), hideAddons)
