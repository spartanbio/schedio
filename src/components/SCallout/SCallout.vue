<template>
  <div
    class="callout"
    :class="classList"
  >
    <slot />
  </div>
</template>

<script>
import { types } from './options'

export default {
  name: 'SCallout',

  props: {
    type: {
      type: String,
      default: types[0],
      validator: (v) => {
        return types.includes(v) || console.error(`\`type\` should be one of ${types.join(', ')}`)
      },
    },
  },

  computed: {
    classList () {
      return {
        [`callout--${this.type}`]: !!this.type,
      }
    },
  },
}
</script>
