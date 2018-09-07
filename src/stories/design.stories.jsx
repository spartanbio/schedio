import { storiesOf } from '@storybook/vue'

import Colour from '@/components/docs/Colour.vue'
import Graphics from '@/components/docs/Graphics.vue'
import InteractionStates from '@/components/docs/InteractionStates.vue'
import Spacing from '@/components/docs/Spacing.vue'
import Typography from '@/components/docs/Typography.vue'

storiesOf('Design', module)
  .add('Typography', () => h => <Typography />)
  .add('Colour', () => h => <Colour />)
  .add('Interaction (TODO)', () => h => <InteractionStates />)
  .add('Graphics (TODO)', () => h => <Graphics />)
  .add('Spacing', () => h => <Spacing />)
