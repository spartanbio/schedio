<template>
  <div
    :class="classList"
    class="button-group"
  >
    <slot />
  </div>
</template>

<script>

export default {
  name: 'SButtonGroup',

  props: {
    isGrouped: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      isDisabled: false,
    };
  },

  computed: {
    classList () {
      return [
        this.groupStyle,
        {
          'button-group--grouped': this.isGrouped,
          'button-group--disabled': this.isDisabled,
        },
      ];
    },
  },

  updated () {
    const buttons = this.$children.filter(child => child.$options.name === 'SButton');
    this.isDisabled = buttons.every(button => !!button.$attrs.disabled);
  },
};
</script>

<style lang="scss">
.button-group {
  margin-bottom: -1 * spacing();
  margin-right: -1 * spacing();

  .button {
    margin-bottom: spacing();
    margin-right: spacing();
  }

  @each $color-name in $button-colors {
    &--color-#{$color-name} {
      .button {
        @include button-color($color-name);
      }
    }

    &--color-#{$color-name}-text {
      box-shadow: none !important;

      .button {
        @include button-text($color-name);
      }
    }

    &--color-#{$color-name}-outlined {
      .button {
        @include button-outline($color-name);
      }
    }
  }

  &--grouped {
    border-radius: border-radius('small');
    box-shadow: shadow();
    display: inline-block;
    margin: 0;

    .button {
      border-radius: 0;
      box-shadow: none;
      margin: 0;
      position: relative;

      &:first-child {
        border-bottom-left-radius: border-radius('small');
        border-top-left-radius: border-radius('small');
      }

      &:last-child {
        border-bottom-right-radius: border-radius('small');
        border-top-right-radius: border-radius('small');
      }

      &:not(:last-child) {
        border-right: 0;
      }

      &:focus {
        // Ensures outline fully visible when focused
        z-index: 10;
      }
    }

    @each $color-name in $button-colors {
      &.button-group--color-#{$color-name} {
        .button {
          &:not(:first-child) {
            // Ensures borders between buttons in grouped button groups are darkened
            // relative to their background
            border-left-color: darken(color($color-name), 20%);
          }
        }
      }
    }
  }

  &--disabled {
    box-shadow: none;
  }
}
</style>
