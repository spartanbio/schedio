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
import DeprecatePropsMixin from '@/mixins/DeprecateProps.mixin'

export default {
  name: 'SButton',

  mixins: [
    DeprecatePropsMixin(['isOutlined', 'isText'], 'type'),
  ],

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

    isText: {
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

      if (this.color && this.isText) buttonStyle += '-text'

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

<style lang="scss">
.button {
  @include button-base;

  &--size-small {
    @include button-size-small;
  }

  &--size-regular {
    @include button-size-regular;
  }

  &--size-large {
    @include button-size-large;
  }

  &--loading {
    color: transparent !important;
    pointer-events: none;
    position: relative;
    text-shadow: none !important;
    user-select: none;

    .icon {
      filter: none;
      stroke: transparent !important;
    }

    .button__spinner {
      left: 50%;
      padding-top: spacing('half');
      position: absolute;
      top: 0;
      transform: translateX(-50%);
    }
  }

  &--icon-only {
    padding: spacing('half');

    .icon {
      margin: 0;

      & + .icon {
        margin-left: spacing('half');
      }
    }
  }

  &__icon {
    &--left {
      margin-left: -1 * spacing('quarter');
      margin-right: spacing('tight');
    }

    &--right {
      margin-left: spacing('tight');
      margin-right: -1 * spacing('quarter');
    }

    .button:disabled & {
      filter: none;
      stroke: color('night', 'lightest');
    }
  }

  @each $color-name in $button-colors {
    &--color-#{$color-name} {
      @include button-color($color-name);

      &-outlined {
        @include button-outline($color-name);
      }

      &-text {
        @include button-text($color-name);
      }
    }
  }
}
</style>
