<template>
  <div
    class="callout"
    :class="classList"
  >
    <slot />
  </div>
</template>

<script>
import { calloutTypes } from './options'

export default {
  name: 'SCallout',

  props: {
    calloutType: {
      type: String,
      default: calloutTypes[0],
      validator: v => {
        return (
          calloutTypes.includes(v) ||
          console.error(`\`calloutType\` should be one of ${calloutTypes.join(', ')}`)
        )
      }
    }
  },

  computed: {
    classList() {
      return {
        ...(this.calloutType && { [`callout--${this.calloutType}`]: !!this.calloutType })
      }
    }
  }
}
</script>
