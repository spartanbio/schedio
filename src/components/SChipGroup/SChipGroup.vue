<template>
  <Component
    :is="tag"
    class="chip-group"
    :class="{
      [`chip-group--color-${color}`]: color,
    }"
  >
    <slot />
  </Component>
</template>

<script>
import { colors } from '@/components/SChip/options'

export default {
  name: 'SChipGroup',

  props: {
    color: {
      type: String,
      default: '',
      validator: (val) => {
        return (
          !val ||
          colors.includes(val) ||
          console.error(`\`color\` must be one of ${colors.join(', ')}`)
        )
      },
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
}
</script>

<style lang="scss">
.chip-group {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -1 * spacing();
  margin-right: -1 * spacing();

  .chip {
    margin-bottom: spacing();
    margin-right: spacing();
  }

  @each $color-name in $button-colors {
    &--color-#{$color-name} {
      .chip {
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
}
</style>
