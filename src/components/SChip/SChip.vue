<template>
  <!-- eslint-disable vue/require-component-is -->
  <Component
    :is="tag"
    v-show="isActive"
    class="chip"
    :class="classList"
    :aria-hidden="!isActive"
  >
    <div class="chip__content">
      <slot>Chip content</slot>
    </div>

    <SButton
      v-if="isClosable"
      size="small"
      class="chip__close"
      :color="buttonColor"
      icon-left="x"
      icon-only
      :aria-label="closeAriaLabel"
      @click="() => $emit('close', false)"
    />
  </Component>
</template>

<script>
import { SButton } from '@/components/SButton';
import { colors } from './options';
import defaults from '@/utils/defaults';

export default {
  name: 'SChip',

  components: {
    SButton,
  },

  /**
   * Custom v-model binding to `close` event and `isActive`, rather than `input` and `value`
   */
  model: {
    event: 'close',
    prop: 'isActive',
  },

  props: {
    color: {
      default: () => defaults.chipColor,
      type: String,
      validator: (val) => {
        return (
          !val ||
          colors.includes(val) ||
          console.error(`\`color\` must be one of ${colors.join(', ')}`)
        );
      },
    },

    isClosable: {
      default: false,
      type: Boolean,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    tag: {
      type: String,
      default: 'div',
    },

    closeAriaLabel: {
      type: String,
      default: 'Close chip',
    },
  },

  computed: {
    classList () {
      return {
        [`chip--color-${this.color}`]: this.color,
      };
    },

    buttonColor () {
      return this.color || 'ice';
    },
  },
};
</script>

<style lang="scss">
.chip {
  @include font-size(6);

  align-items: center;
  background-color: color('ice');
  border-radius: border-radius('small');
  display: inline-flex;
  padding: spacing('half') spacing();
  transition: all easing() duration();
  // ensures SVGs and text align as expected
  vertical-align: top;

  &__content {
    align-items: center;
    display: inline-flex;
  }

  &__close {
    border: none;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    box-shadow: none;
    // allows the button to have padding while not increasing the box size
    margin: -1 * spacing('half');
    margin-left: spacing('half');
    margin-right: -1 * spacing();
    padding: spacing('half');

    &:active,
    &:not(:disabled):not(:active):hover {
      box-shadow: none !important;
    }
  }

  @each $color-name in $button-colors {
    &--color-#{$color-name} {
      background-color: color($color-name);
      color: choose-contrast-color($color-name);

      .chip__close {
        box-shadow: none;

        &:active,
        &:not(:disabled):not(:active):hover {
          box-shadow: none !important;
        }
      }
    }
  }
}
</style>
