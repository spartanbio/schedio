<template>
  <Component
    :is="componentTag"
    :class="classList"
  >
    <slot />
  </Component>
</template>

<script>
export default {
  name: 'SHeading',

  props: {
    level: {
      type: [String, Number],
      default: 1,
      validator: (value) => {
        return (
          Number(value) <= 4 ||
          console.error('Level must be 4 or lower. 2 or lower if `isDisplay`.')
        )
      },
    },

    isDisplay: {
      type: Boolean,
      default: false,
    },

    hasNoCase: {
      type: Boolean,
      default: false,
    },

    isSubtle: {
      type: Boolean,
      default: false,
    },

    isTitle: {
      type: Boolean,
      default: false,
    },

    isSubtitle: {
      type: Boolean,
      default: false,
    },

    tag: {
      type: String,
      default: '',
      validator: (value) => {
        const allowedTags = ['div', 'span', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']

        return (
          // allow empty
          !value ||
          allowedTags.includes(value) ||
          console.error(`Tag must be one of: ${allowedTags.join(', ')}.`)
        )
      },
    },
  },

  computed: {
    classList () {
      return [
        'heading',
        {
          [`heading--level-${this.level}`]: this.level,
          'heading--display': this.isDisplay,
          'heading--subtle': this.isSubtle,
          'heading--no-case': this.hasNoCase,
          'heading--title': this.isTitle,
          'heading--subtitle': this.isSubtitle,
        },
      ]
    },

    componentTag () {
      return this.tag || 'h' + this.level
    },
  },
}
</script>

<style lang="scss">
.heading {
  font-weight: font-weight('bold');
  margin-bottom: 1rem;
  margin-top: 2rem;
  text-transform: uppercase;

  &:only-child {
    margin-bottom: spacing('none');
  }

  &--level-1 {
    @include font-size(3);
  }

  &--level-2 {
    @include font-size(4);
  }

  &--level-3 {
    @include font-size(5);
  }

  &--level-4 {
    @include font-size(5);

    text-transform: none;
  }

  &--display {
    &.heading--level-1 {
      @include font-size(1);
    }

    &.heading--level-2 {
      @include font-size(2);
    }
  }

  &--subtle {
    font-weight: font-weight('light');
    text-transform: none;
  }

  &--no-case {
    text-transform: none;
  }

  &--title {
    margin-bottom: 0;
  }

  &--subtitle {
    margin-top: 0 !important;
  }

  & + & {
    margin-top: 1rem;
  }

  &:first-child {
    margin-top: 0;
  }
}
</style>
