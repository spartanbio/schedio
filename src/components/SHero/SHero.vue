<template>
  <Component
    :is="tag"
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
  </Component>
</template>

<script>
import * as options from './options'
import defaults from '@/utils/defaults'

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
    tag: {
      type: String,
      default: 'div',
    },

    height: {
      type: String,
      default: () => defaults.heroHeight,
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

<style lang="scss">
.hero {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &--height {
    &-half {
      min-height: 50vh;
    }

    &-two-thirds {
      min-height: 66vh;
    }

    &-three-quarters {
      min-height: 75vh;
    }

    &-almost-full {
      min-height: 90vh;
    }

    &-full {
      min-height: 100vh;
    }
  }

  &__body {
    align-items: center;
    display: flex;
    flex: 1 0 auto;
    padding: spacing('triple') spacing('loose');
  }

  &--has-no-padding {
    .hero__body {
      padding: spacing('none');
    }
  }

  &__foot,
  &__head {
    flex: 0 0 auto;
  }

  @each $color-name in $hero-colors {
    &--color-#{$color-name} {
      background-color: color($color-name);
      color: choose-contrast-color($color-name);
    }
  }
}
</style>
