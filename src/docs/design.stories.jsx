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
    showAddonPanel: false
  }
}

storiesOf('* Design/Color', module).add('Color', () => h => <Color />, hideAddons)
storiesOf('* Design/Interaction', module).add('Interaction', () => h => <Interaction />, hideAddons)
storiesOf('* Design/Graphics', module).add('Graphics', () => h => <Graphics />, hideAddons)
storiesOf('* Design/Spacing', module).add('Spacing', () => h => <Spacing />, hideAddons)

storiesOf('* Design/Typography', module)
  .add('Base', () => h => <TypographyBase />, hideAddons)
  .add('Headings & Displays', () => h => <TypographyHeadings />, hideAddons)
  .add('Print', () => h => <TypographyPrint />, hideAddons)
