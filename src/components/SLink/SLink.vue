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
import defaults from '@/utils/defaults'

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

    useAnchor: {
      type: Boolean,
      default: false,
    },

    linkComponent: {
      type: String,
      default: () => defaults.linkComponent,
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
      if (this.isExternalLink || !this.$router || this.useAnchor) return 'a'

      return this.linkComponent
    },

    linkProperties () {
      if (this.isExternalLink) {
        return {
          href: this.to,
          target: '_blank',
          rel: 'noopener noreferrer',
        }
      }

      if (this.useAnchor) {
        return {
          href: this.to,
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

<style lang="scss">
.link {
  $highlight-spacing: 0.1em;

  align-items: center;
  color: color('spartan_blue', 'light');
  display: inline-flex;
  position: relative;
  text-decoration: none;
  // Required for `z-index` to work properly on `::after`
  z-index: 1;

  // Add an obvious highlight
  &::after {
    background-color: lighten(color('green', 'lighter'), 30%);
    border-radius: border-radius('small');
    // Move it up a bit. Uses bottom so highlight animates up
    // Percentages are favoured over ems as measurements are based on line-height.
    bottom: 10%;
    content: '';
    // Approximately align top with baseline
    height: 20%;
    // Give it just a bit of visual padding
    left: -1 * $highlight-spacing;
    position: absolute;
    transition: all duration('fast') easing();
    // Adjusts for left offset
    width: unquote('calc(100% + #{2 * $highlight-spacing})');
    z-index: -1;
  }

  // Animate the highlight
  &:hover {
    &::after {
      // Height is approximately from the bottom of `::after` to the top of the link text
      height: 80%;
    }
  }

  // Tone-down visited links
  &:visited {
    color: color('spartan_blue');

    &::after {
      background-color: color('grey', 'light');
    }
  }

  &--plain {
    color: color('spartan_blue', 'light');

    &:active {
      color: color('green');
    }

    &:visited {
      color: color('magenta', 'dark');
    }

    &::after {
      display: none;
    }
  }

  &--light {
    color: color('ice');

    &::after {
      background-color: color('green');
    }

    &:visited {
      color: color('grey', 'lighter');

      &::after {
        background-color: color('grey', 'darker');
      }
    }
  }

  &__icon {
    margin-left: spacing('quarter');
  }
}
</style>
