<template>
  <label
    :class="classList"
    class="label"
  >
    <!-- Wrapped to keep optional on the right when reversed -->
    <div>
      {{ label }}
      <span
        v-if="!isRequired && !hideOptional"
        class="label__optional"
      >
        &mdash;&nbsp;Optional
      </span>
    </div>

    <slot />
  </label>
</template>

<script>
export default {
  name: 'SLabel',

  props: {
    label: {
      type: String,
      required: true,
    },

    isRequired: {
      type: Boolean,
      default: false,
    },

    isInline: {
      type: Boolean,
      default: false,
    },

    isFullwidth: {
      type: Boolean,
      default: false,
    },

    isReversed: {
      type: Boolean,
      default: false,
    },

    hideOptional: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classList () {
      return {
        'label--inline': this.isInline,
        'label--fullwidth': this.isFullwidth,
        'label--reversed': this.isReversed,
      }
    },
  },

  mounted () {
    if ((this.isFullwidth || this.isReversed) && !this.isInline) {
      console.error('`isFullwidth` and `isReversed` require `isInline`')
    }
  },
}
</script>

<style lang="scss">
.label {
  @include font-size(5);

  display: block;
  font-weight: font-weight('demi');

  &--fullwidth {
    width: 100%;
  }

  &--inline {
    align-items: center;
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;

    .select {
      // prevent arrow from overlapping default placeholder
      min-width: 16em;
    }

    .input,
    .select,
    .textarea {
      margin-top: 0;

      &__container {
        margin-left: spacing();
      }
    }

    &.label--reversed {
      flex-direction: row-reverse;
    }

    &:not(:last-child) {
      margin-right: spacing();
    }
  }

  &__optional {
    @include font-size(6);

    color: color('night', 'light');
    font-weight: font-weight('regular');
    text-transform: none;
  }
}
</style>
