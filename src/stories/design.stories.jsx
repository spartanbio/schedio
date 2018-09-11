import { storiesOf } from '@storybook/vue'

import Color from '@/components/docs/Color.vue'
import Graphics from '@/components/docs/Graphics.vue'
import InteractionStates from '@/components/docs/InteractionStates.vue'
import Spacing from '@/components/docs/Spacing.vue'
import Typography from '@/components/docs/Typography.vue'

storiesOf('Design', module)
  .add('Typography', () => h => <Typography />)
  .add('Color', () => h => <Color />)
  .add('Interaction (TODO)', () => h => <InteractionStates />)
  .add('Graphics (TODO)', () => h => <Graphics />)
  .add('Spacing', () => h => <Spacing />)
