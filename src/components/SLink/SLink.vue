<template>
  <component
    :is="componentIs"
    v-bind="[linkProperties, $attrs]"
    :class="classList"
    class="link"
    v-on="$listeners"
  >
    <slot>{{ to }}</slot>
  </component>
</template>

<script>
export default {
  name: 'SLink',

  props: {
    to: {
      type: [String, Object],
      required: true
    },

    isPlain: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classList() {
      return { 'link--external': this.isExternalLink, 'link--plain': this.isPlain }
    },

    isExternalLink() {
      return typeof this.to === 'string' && /^(http(s)?|ftp):\/\//.test(this.to)
    },

    componentIs() {
      if (this.isExternalLink || (!this.$router && !this.isExternalLink)) return 'a'
      if (this.$root.nuxt) return 'nuxt-link'
      return 'router-link'
    },

    linkProperties() {
      if (this.isExternalLink) {
        return {
          href: this.to,
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      }

      // handles internal links if `vue-router` is not present
      if (!this.$router && !this.isExternalLink) {
        return {
          href: this.to
        }
      }

      return {
        // nuxt compatibility
        to: this.to
      }
    }
  }
}
</script>
