import { storiesOf } from '@storybook/vue'
import Color from '@/docs/Color'
import Graphics from '@/docs/Graphics.vue'
import InteractionStates from '@/docs/InteractionStates.vue'
import Spacing from '@/docs/Spacing.vue'
import TypographyBase from '@/docs/Typography/TypographyBase.vue'
import TypographyHeadings from '@/docs/Typography/TypographyHeadings.vue'
import TypographyPrint from '@/docs/Typography/TypographyPrint.vue'

storiesOf('* Design/Color', module).add('Color', () => h => <Color />)
storiesOf('* Design/Interaction', module).add('Interaction', () => h => <InteractionStates />)
storiesOf('* Design/Graphics', module).add('Graphics', () => h => <Graphics />)
storiesOf('* Design/Spacing', module).add('Spacing', () => h => <Spacing />)

storiesOf('* Design/Typography', module)
  .add('Base', () => h => <TypographyBase />)
  .add('Headings & Displays', () => h => <TypographyHeadings />)
  .add('Print', () => h => <TypographyPrint />)
