<template>
  <svg
    :class="classList"
    class="spinner"
    role="status"
    viewBox="0 0 32 32"
  >
    <path d="M16 2 a 14 14 0 0 0 0 28 a 14 14 0 0 0 0 -28" />
  </svg>
</template>

<script>
import { colors, sizes } from './options'

const propError = (propName, values) => console.error(`\`${propName}\` must be one of ${values}`)

export default {
  name: 'SSpinner',

  props: {
    color: {
      type: String,
      default: '',
      validator: c => !c || colors.includes(c) || propError('color', colors),
    },

    size: {
      type: String,
      default: '',
      validator: s => !s || sizes.includes(s) || propError('size', sizes),
    },
  },

  computed: {
    classList () {
      return {
        [`spinner--${this.size}`]: this.size,
        [`spinner--color-${this.color}`]: this.color,
      }
    },
  },
}
</script>
