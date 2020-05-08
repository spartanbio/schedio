<template>
  <!-- eslint-disable vue/no-v-html -->
  <svg
    :class="classList"
    class="icon"
    viewBox="0 0 24 24"
    v-html="featherIcon"
  />
</template>

<script>
import { colors, sizes, allShadeOptions } from './options.js'
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
        if (!value || colors[value]) return true

        return console.error(`\`color\` ${value} not found. Allowed colors: ${colors}`)
      },
    },

    shade: {
      type: String,
      default: '',
      validator: value => !value || allShadeOptions.includes(value),
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
      const list = []

      if (this.color) {
        let _color = `icon--color-${this.color}`

        if (this.shade && this.shade !== 'base' && this.hasValidShade) {
          _color += `-${this.shade}`
        }

        list.push(_color)
      }

      if (this.size) list.push(`icon--size-${this.size}`)

      return list
    },

    hasValidShade () {
      return Object.hasOwnProperty.call(colors[this.color], this.shade)
    },

    featherIcon () {
      return icons[this.icon] || ''
    },
  },

  mounted () {
    if (this.shade && !this.hasValidShade) {
      console.error(`Valid shades of \`${this.color}\` are: ${Object.keys(colors[this.color]).join(', ')}.`)
    }
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

  @each $color-name in $icon-colors {
    &--color-#{$color-name} {
      $values: map-keys(map-get($color-palette-data, $color-name));

      stroke: color($color-name);

      @each $value in $values {
        @if $value != 'base' {
          &-#{$value} {
            stroke: color($color-name, $value);
          }
        }
      }
    }
  }
}
</style>
