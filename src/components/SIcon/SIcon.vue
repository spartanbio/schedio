<template>
  <!-- eslint-disable vue/no-v-html -->
  <svg
    :class="classList"
    class="icon"
    viewBox="0 0 24 24"
    v-html="featherIcon"
  >
    <!-- <use :xlink:href="require('feather-icons/dist/feather-sprite.svg') + '#' + icon" /> -->
  </svg>
</template>

<script>
import { colors, sizes } from './options.js'
import icons from 'feather-icons/dist/icons.json'

const list = Object.keys(icons)

export default {
  name: 'SIcon',

  props: {
    icon: {
      type: String,
      required: true,
      validator: (v) => {
        return list.includes(v) || console.error(`\`icon\` must be one of: ${list.join(', ')}`)
      },
    },

    color: {
      type: String,
      default: '',
      validator: (value) => {
        if (!value || colors.includes(value)) return true

        return console.error(`\`color\` ${value} not found. Allowed colors: ${colors}`)
      },
    },

    size: {
      type: String,
      default: '',
      validator: (value) => {
        if (!value || sizes.includes(value)) return true

        return console.error(`\`sizes\` ${value} not found. Allowed sizes: ${sizes}`)
      },
    },
  },

  computed: {
    classList () {
      return {
        [`icon--color-${this.color}`]: this.color,
        [`icon--size-${this.size}`]: this.size,
      }
    },

    featherIcon () {
      return icons[this.icon] || ''
    },
  },
}
</script>

<style lang="scss">
.icon {
  fill: none;
  height: 1.5em;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  // using px because android browsers render stroke width twice as thick when using ems
  stroke-width: 2px;
  width: 1.5em;

  &--size-small {
    height: 0.75em;
    width: 0.75em;
  }

  &--size-regular {
    height: 1.5em;
    width: 1.5em;
  }

  &--size-large {
    height: 4em;
    width: 4em;
  }

  @each $color-name in $button-colors {
    &--color-#{$color-name} {
      stroke: color($color-name);
    }
  }
}
</style>
