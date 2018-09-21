<template>
  <div :class="classList" class="row">
    {{ columnJustification }}
    <slot/>
  </div>
</template>

<script>
import { columnJustificationOptions } from './row-options'

export default {
  name: 'BaseContainerRow',

  props: {
    isVerticallyCentered: {
      type: Boolean,
      default: false
    },

    columnJustification: {
      type: String,
      default: '',
      validator: value => {
        if (!columnJustificationOptions.includes(value)) {
          return console.error(
            `\`columnJustification\` must be one of ${columnJustificationOptions}`
          )
        }

        return true
      }
    }
  },

  computed: {
    classList() {
      return {
        'row--vertically-centered': this.isVerticallyCentered,
        [`row--columns-${this.columnJustification}`]: this.columnJustification
      }
    }
  }
}
</script>
