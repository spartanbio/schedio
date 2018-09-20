<template>
  <label :class="classList" class="label">
    {{ label }}
    <slot/>
  </label>
</template>

<script>
export default {
  name: 'BaseLabel',

  props: {
    label: {
      type: String,
      required: true
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
