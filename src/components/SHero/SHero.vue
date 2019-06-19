<template>
  <div
    :class="classList"
    class="hero"
  >
    <div
      v-if="$slots.head"
      class="hero__head"
    >
      <slot name="head" />
    </div>

    <div class="hero__body">
      <slot />
    </div>

    <div
      v-if="$slots.foot"
      class="hero__foot"
    >
      <slot name="foot" />
    </div>
  </div>
</template>

<script>
import * as options from './options'

const limitValues = propName => (v) => {
  const validOptions = options[`${propName}s`]

  return (
    !v ||
    validOptions.includes(v) ||
    console.error(`\`${propName}\` must be one of ${validOptions.join(', ')}`)
  )
}

export default {
  name: 'SHero',

  props: {
    height: {
      type: String,
      default: '',
      validator: limitValues('height'),
    },

    color: {
      type: String,
      default: '',
      validator: limitValues('color'),
    },

    hasNoPadding: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classList () {
      return [
        this.height && `hero--height-${this.height}`,
        this.color && `hero--color-${this.color}`,
        this.hasNoPadding && 'hero--has-no-padding',
      ]
    },
  },

  created () {
    if (!this.$slots.default) {
      console.error(`\`${this.$options.name}\` requires default slot content.`)
    }
  },
}
</script>
