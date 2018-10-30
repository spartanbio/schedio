<template>
  <label :class="classList" class="label">
    <!-- Wrapped to keep optional on the right when reversed -->
    <span>
      {{ label }}
      <span v-if="isOptional" class="label__optional">&mdash;&nbsp;Optional</span>
    </span>
    <slot/>
  </label>
</template>

<script>
export default {
  name: 'SLabel',

  props: {
    label: {
      type: String,
      required: true
    },

    isOptional: {
      type: Boolean,
      default: true
    },

    isInline: {
      type: Boolean,
      default: false
    },

    isFullwidth: {
      type: Boolean,
      default: false
    },

    isReversed: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classList() {
      return {
        'label--inline': this.isInline,
        'label--fullwidth': this.isFullwidth,
        'label--reversed': this.isReversed
      }
    }
  },

  mounted() {
    if ((this.isFullwidth || this.isReversed) && !this.isInline) {
      console.error('`isFullwidth` and `isReversed` require `isInline`')
    }
  }
}
</script>
