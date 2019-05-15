<template>
  <div
    :class="classList"
    class="button-group"
  >
    <slot />
  </div>
</template>

<script>
import { colors } from '@/components/SButton/options.js'

export default {
  name: 'SButtonGroup',

  props: {
    color: {
      type: String,
      default: '',
      validator: value => {
        if (!value || colors.includes(value)) return true
        return console.error(`\`color\` ${value} not found. Allowed colors: ${[...colors]}`)
      }
    },

    isOutlined: {
      type: Boolean,
      default: false
    },

    isGrouped: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isDisabled: false
    }
  },

  computed: {
    classList() {
      return [
        this.groupStyle,
        {
          'button-group--grouped': this.isGrouped,
          'button-group--disabled': this.isDisabled
        }
      ]
    },
    groupStyle() {
      let style = ''

      if (this.color) style += `button-group--color-${this.color}`

      if (style && this.isOutlined) style += '-outlined'

      return style
    }
  },

  updated() {
    const buttons = this.$children.filter(child => child.$options.name === 'SButton')
    this.isDisabled = buttons.every(button => !!button.$attrs.disabled)
  }
}
</script>
