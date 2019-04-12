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
    groupColor: {
      type: String,
      default: '',
      validator: value => {
        if (!value || colors.includes(value)) return true
        return console.error(`\`groupColor\` ${value} not found. Allowed colors: ${[...colors]}`)
      }
    },

    groupOutlineColor: {
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

  data() {
    return {
      isDisabled: false
    }
  },

  computed: {
    classList() {
      return {
        [`button-group--color-${this.groupColor}`]: this.groupColor,
        [`button-group--color-${this.groupOutlineColor}-outlined`]: this.groupOutlineColor,
        'button-group--grouped': this.isGrouped,
        'button-group--disabled': this.isDisabled
      }
    }
  },

  updated() {
    const buttons = this.$children.filter(child => child.$options.name === 'SButton')
    this.isDisabled = buttons.every(button => !!button.$attrs.disabled)
  }
}
</script>
