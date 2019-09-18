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
