<script>
export default {
  name: 'SLink',

  props: {
    to: {
      type: [String, Object],
      required: true
    }
  },

  computed: {
    classList() {
      return { 'link--external': this.isExternalLink }
    },

    isExternalLink() {
      return typeof this.to === 'string' && /^(http(s)?|ftp):\/\//.test(this.to)
    },

    linkProperties() {
      if (this.isExternalLink) {
        return {
          is: 'a',
          href: this.to,
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      }

      // handles internal links if `vue-router` is not present
      if (!this.$router && !this.isExternalLink) {
        return {
          is: 'a',
          href: this.to
        }
      }

      return {
        // nuxt compatibility
        is: this.$root.nuxt ? 'nuxt-link' : 'router-link',
        to: this.to
      }
    }
  },

  // using string template due to `eslint-plugin-vue`/vetur issues
  // can't disable `vue/component-is` rule in editor, but eslint cli picks it up properly
  template: `
    <component
      v-bind="[linkProperties, $attrs]"
      v-on="$listeners"
      :class="classList"
      class="link">
      <slot />
    </component>
  `
}
</script>
