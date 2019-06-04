<template>
  <!-- eslint-disable vue/require-component-is -->
  <component
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
      @click="$emit('close', false)"
    />
  </component>
</template>

<script>
import { SButton } from '@/components/SButton'
import { colors } from './options'

export default {
  name: 'SChip',

  components: {
    SButton
  },

  /**
   * Custom v-model binding to `close` event and `isActive`, rather than `input` and `value`
   */
  model: {
    event: 'close',
    prop: 'isActive'
  },

  props: {
    color: {
      default: '',
      type: String,
      validator: val => {
        return (
          !val ||
          colors.includes(val) ||
          console.error(`\`color\` must be one of ${colors.join(', ')}`)
        )
      }
    },

    isClosable: {
      default: false,
      type: Boolean
    },

    isActive: {
      type: Boolean,
      default: true
    },

    tag: {
      type: String,
      default: 'div'
    },

    closeAriaLabel: {
      type: String,
      default: 'Close chip'
    }
  },

  computed: {
    classList() {
      return {
        [`chip--color-${this.color}`]: this.color
      }
    },

    buttonColor() {
      return this.color || 'ice'
    }
  }
}
</script>
