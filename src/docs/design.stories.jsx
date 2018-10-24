import { storiesOf } from '@storybook/vue'
import Color from '@/docs/Color'
import Graphics from '@/docs/Graphics.vue'
import InteractionStates from '@/docs/InteractionStates.vue'
import Spacing from '@/docs/Spacing.vue'
import TypographyBase from '@/docs/Typography/TypographyBase.vue'
import TypographyHeadings from '@/docs/Typography/TypographyHeadings.vue'
import TypographyPrint from '@/docs/Typography/TypographyPrint.vue'

storiesOf('Design', module)
  .add('Color', () => h => <Color />)
  .add('Interaction', () => h => <InteractionStates />)
  .add('Graphics', () => h => <Graphics />)
  .add('Spacing', () => h => <Spacing />)

storiesOf('Design.Typography', module)
  .add('Base', () => h => <TypographyBase />)
  .add('Headings & Displays', () => h => <TypographyHeadings />)
  .add('Print', () => h => <TypographyPrint />)
