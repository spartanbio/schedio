<template>
  <Component
    :is="componentIs"
    v-bind="[linkProperties, $attrs]"
    :class="classList"
    class="link"
    v-on="$listeners"
  >
    <slot>{{ to }}</slot>

    <SIcon
      v-if="icon"
      :icon="icon"
      size="small"
      class="link__icon"
    />

    <SIcon
      v-if="isExternalLink"
      icon="external-link"
      size="small"
      class="link__icon"
      aria-label="External link"
    />
  </Component>
</template>

<script>
export default {
  name: 'SLink',

  props: {
    to: {
      type: [String, Object],
      required: true,
    },

    isExternal: {
      type: Boolean,
      default: false,
    },

    isPlain: {
      type: Boolean,
      default: false,
    },

    isLight: {
      type: Boolean,
      default: false,
    },

    icon: {
      type: String,
      default: '',
    },
  },

  computed: {
    classList () {
      return {
        'link--plain': this.isPlain,
        'link--light': this.isLight,
      }
    },

    isExternalLink () {
      return this.isExternal ||
        (typeof this.to === 'string' && /^(http(s)?|ftp):\/\//.test(this.to))
    },

    componentIs () {
      if (this.isExternalLink || !this.$router) return 'a'
      if (this.$root.nuxt) return 'nuxt-link'
      return 'router-link'
    },

    linkProperties () {
      if (this.isExternalLink) {
        return {
          href: this.to,
          target: '_blank',
          rel: 'noopener noreferrer',
        }
      }

      // handles internal links if `$router` is not present (i.e.: vue and nuxt)
      if (this.$router) {
        return {
          to: this.to,
        }
      }

      return {
        href: this.to,
      }
    },
  },
}
</script>
