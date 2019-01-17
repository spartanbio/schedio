<template>
  <div :class="classList" class="button-group">
    <slot/>
  </div>
</template>

<script>
import { colors } from '@/components/SButton/options.js'

export default {
  name: 'SButtonGroup',

  props: {
    groupColor: {
      type: String,
      default: '',
      validator: value => {
        if (!value || colors.includes(value)) return true
        return console.error(`\`groupColor\` ${value} not found. Allowed colors: ${[...colors]}`)
      }
    },

    isGrouped: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classList() {
      return {
        [`button-group--color-${this.groupColor}`]: this.groupColor,
        'button-group--grouped': this.isGrouped
      }
    }
  }
}
</script>
