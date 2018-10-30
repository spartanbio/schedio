<template>
  <component :is="displayTag" :class="classList">
    <slot/>
  </component>
</template>

<script>
export default {
  name: 'SHeading',

  props: {
    level: {
      type: [String, Number],
      required: true,
      validator: value => Number(value) <= 3 || console.error('Level must be 3 or lower.')
    },

    isDisplay: {
      type: Boolean,
      default: false
    },

    isUppercase: {
      type: Boolean,
      default: false
    },

    isSubtle: {
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
    classList() {
      return [
        this.displayClass,
        {
          subtle: this.isSubtle,
          uppercase: this.isUppercase
        }
      ]
    },

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
        throw new Error(`${name}: \`level\` must be 1 or 2 if  \`isDisplay\` is true.`)
      }

      if (this.isSubtle && this.isUppercase) {
        console.error('`SHeading` always has no `text-transform` if `isSubtle` is true.')
      }
    }
  }
}
</script>
