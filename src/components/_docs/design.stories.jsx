import { storiesOf } from '@storybook/vue'
import Color from '@/components/_docs/Color'
import Graphics from '@/components/_docs/Graphics.vue'
import InteractionStates from '@/components/_docs/InteractionStates.vue'
import Spacing from '@/components/_docs/Spacing.vue'
import TypographyBase from '@/components/_docs/Typography/TypographyBase.vue'
import TypographyHeadings from '@/components/_docs/Typography/TypographyHeadings.vue'
import TypographyPrint from '@/components/_docs/Typography/TypographyPrint.vue'

storiesOf('Design', module)
  .add('Color', () => h => <Color />)
  .add('Interaction', () => h => <InteractionStates />)
  .add('Graphics', () => h => <Graphics />)
  .add('Spacing', () => h => <Spacing />)

storiesOf('Design.Typography', module)
  .add('Base', () => h => <TypographyBase />)
  .add('Headings & Displays', () => h => <TypographyHeadings />)
  .add('Print', () => h => <TypographyPrint />)
