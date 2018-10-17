<template>
  <div :class="classList" class="button-group">
    <slot/>
  </div>
</template>

<script>
import { colors } from '@/components/BaseButton/options.js'

export default {
  name: 'ButtonGroup',

  props: {
    groupColor: {
      type: String,
      default: '',
      validator: value => {
        if (!value || colors.includes(value)) return true

        return console.error(`\`groupColor\` ${value} not found. Allowed colors: ${[...colors]}`)
      }
    }
  },
  computed: {
    classList() {
      return [this.groupColor ? `button-group-color--${this.groupColor}` : '']
    }
  }
}
</script>
