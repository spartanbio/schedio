<template>
  <button
    v-bind="$attrs"
    :class="classList"
    class="button"
    :aria-label="ariaLabel"
    v-on="$listeners"
  >
    <template v-if="isLoading">
      <span class="button__spinner">
        <SSpinner />
      </span>
    </template>

    <SIcon
      v-if="iconLeft"
      :icon="iconLeft"
      class="button__icon button__icon--left"
    />

    <slot v-if="!iconOnly" />

    <SIcon
      v-if="iconRight"
      :icon="iconRight"
      class="button__icon button__icon--right"
    />
  </button>
</template>

<script>
import { colors, sizes } from './options.js'

export default {
  name: 'SButton',

  props: {
    color: {
      type: String,
      default: '',
      validator: (value) => {
        if (!value || colors.includes(value)) return true

        return console.error(`\`color\` ${value} not found. Allowed colors: ${[...colors]}`)
      },
    },

    size: {
      type: String,
      default: '',
      validator: (value) => {
        if (!value || sizes.includes(value)) return true

        return console.error(`\`size\` ${value} not found. Allowed sizes: ${sizes}`)
      },
    },

    isOutlined: {
      type: Boolean,
      default: false,
    },

    isLoading: {
      type: Boolean,
      default: false,
    },

    iconOnly: {
      type: Boolean,
      default: false,
    },

    iconLeft: {
      type: String,
      default: '',
    },

    iconRight: {
      type: String,
      default: '',
    },
  },

  computed: {
    classList () {
      return [
        this.buttonStyle && this.buttonStyle,
        this.size && `button--size-${this.size}`,
        this.iconOnly && 'button--icon-only',
        this.isLoading && 'button--loading',
      ]
    },

    buttonStyle () {
      let buttonStyle = ''

      if (this.color) buttonStyle += `button--color-${this.color}`

      if (this.color && this.isOutlined) buttonStyle += '-outlined'

      return buttonStyle
    },

    ariaLabel () {
      if (this.$attrs['aria-label']) return this.$attrs['aria-label']

      if (this.iconOnly && this.$slots.default && this.$slots.default[0]) {
        return this.$slots.default[0].text
      }

      return null
    },
  },

  watch: {
    iconOnly (val) {
      if (val && !this.ariaLabel) {
        console.warn('Button requires content or `aria-label`')
      }
    },
  },
}
</script>
