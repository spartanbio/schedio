import { storiesOf } from '@storybook/vue'

import Color from '@/components/docs/Color'
import Graphics from '@/components/docs/Graphics.vue'
import InteractionStates from '@/components/docs/InteractionStates.vue'
import Spacing from '@/components/docs/Spacing.vue'
import TypographyBase from '@/components/docs/Typography/TypographyBase.vue'
import TypographyHeadings from '@/components/docs/Typography/TypographyHeadings.vue'

storiesOf('Design', module)
  .add('Color', () => h => <Color />)
  .add('Interaction', () => h => <InteractionStates />)
  .add('Graphics', () => h => <Graphics />)
  .add('Spacing', () => h => <Spacing />)

storiesOf('Design.Typography', module)
  .add('Base', () => h => <TypographyBase />)
  .add('Headings & Displays', () => h => <TypographyHeadings />)
