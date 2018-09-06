import { storiesOf } from '@storybook/vue'

import Colour from '@/components/docs/Colour.vue'
import Graphics from '@/components/docs/Graphics.vue'
import Interaction from '@/components/docs/Interaction.vue'
import Spacing from '@/components/docs/Spacing.vue'
import Typography from '@/components/docs/Typography.vue'

storiesOf('Design', module)
  .add('Typography', () => ({
    components: { Typography },
    template: '<Typography />'
  }))
  .add('Colour', () => ({
    components: { Colour },
    template: '<Colour />'
  }))
  .add('Interaction (TODO)', () => ({
    components: { Interaction },
    template: '<Interaction />'
  }))
  .add('Graphics (TODO)', () => ({
    components: { Graphics },
    template: '<Graphics />'
  }))
  .add('Spacing', () => ({
    components: { Spacing },
    template: '<Spacing />'
  }))
