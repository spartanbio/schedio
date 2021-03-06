<template>
  <button
    v-bind="$attrs"
    :class="classList"
    class="button"
    :aria-label="ariaLabel"
    :type="nativeType"
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
      aria-hidden="true"
    />

    <slot v-if="!iconOnly" />

    <SIcon
      v-if="iconRight"
      :icon="iconRight"
      class="button__icon button__icon--right"
      aria-hidden="true"
    />
  </button>
</template>

<script>
import defaults from '@/utils/defaults';
import { colors, colorNames, sizes, types, allShadeOptions } from './options.js';

export default {
  name: 'SButton',

  props: {
    color: {
      type: String,
      default: () => defaults.buttonColor,
      validator: (value) => {
        if (!value || colorNames.includes(value)) return true;

        return console.error(`\`color\` ${value} not found. Allowed colors: ${colorNames}`);
      },
    },

    shade: {
      type: String,
      default: () => defaults.buttonShade,
      validator: value => !value || allShadeOptions.includes(value),
    },

    size: {
      type: String,
      default: '',
      validator: (value) => {
        if (!value || sizes.includes(value)) return true;

        return console.error(`\`size\` ${value} not found. Allowed sizes: ${sizes}`);
      },
    },

    type: {
      type: String,
      default: () => defaults.buttonType,
      validator (value) {
        if (!value || types.includes(value)) return true;

        return console.error(`\`type\` ${value} not found. Allowed types: ${types}`);
      },
    },

    nativeType: {
      type: String,
      default: null,
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
      ];
    },

    buttonStyle () {
      let buttonStyle = '';

      if (this.color) {
        buttonStyle = `button--color-${this.color}`;

        if (this.shade && this.shade !== 'base') buttonStyle += `-${this.shade}`;
      }

      if (this.color && this.type) buttonStyle += `-${this.type}`;

      return buttonStyle;
    },

    hasValidShade () {
      return Object.hasOwnProperty.call(colors[this.color], this.shade);
    },

    ariaLabel () {
      if (this.$attrs['aria-label']) return this.$attrs['aria-label'];

      if (this.iconOnly && this.$slots.default && this.$slots.default[0]) {
        return this.$slots.default[0].text;
      }

      return null;
    },
  },

  watch: {
    iconOnly (val) {
      if (val && !this.ariaLabel) {
        console.warn('Button requires content or `aria-label`');
      }
    },
  },

  mounted () {
    if (this.shade && !this.hasValidShade) {
      console.error(`Valid shades of \`${this.color}\` are: ${Object.keys(colors[this.color]).join(', ')}.`);
    }
  },
};
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
      $values: map-keys(map-get($color-palette-data, $color-name));

      @include button-color($color-name);

      &-outlined {
        @include button-outline($color-name);
      }

      &-text {
        @include button-text($color-name);
      }

      @each $value in $values {
        &-#{$value} {
          @if $value != 'base' {
            @include button-color($color-name, $value);

            &-outlined {
              @include button-outline($color-name, $value);
            }

            &-text {
              @include button-text($color-name, $value);
            }
          }
        }
      }
    }
  }
}
</style>
