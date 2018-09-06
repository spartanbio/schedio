<template>
  <component
    :is="displayTag"
    :class="displayClass">
    <slot/>
  </component>
</template>

<script>
export default {
  name: 'BaseHeading',

  props: {
    level: {
      type: String,
      required: true
    },

    isDisplay: {
      type: Boolean,
      default: false
    },

    tag: {
      type: String,
      default: '',
      validator: value => {
        // allow empty
        if (!value) return true

        const allowedTags = ['div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
        if (!allowedTags.includes(value)) {
          console.error(`Tag must be one of: ${allowedTags.join(', ')}.`)
          return false
        }
      }
    }
  },

  computed: {
    displayClass() {
      return this.isDisplay ? 'display-' + this.level : 'heading-' + this.level
    },

    displayTag() {
      return this.tag || 'h' + this.level
    }
  },

  created() {
    this.validateProps()
  },

  methods: {
    validateProps() {
      // validate `level` prop if `isDisplay` is set
      if (this.isDisplay && this.level > 2) {
        const name = this.$options.name
        const msg = `${name}: \`level\` must be 1 or 2 if  \`isDisplay\` is true`
        throw new Error(msg)
      }
    }
  }
}
</script>
