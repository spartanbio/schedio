<template>
  <svg
    :class="classList"
    class="spinner"
    role="status"
    viewBox="0 0 32 32"
  >
    <path d="M16 2 a 14 14 0 0 0 0 28 a 14 14 0 0 0 0 -28" />
  </svg>
</template>

<script>
import { colors, sizes } from './options';
import defaults from '@/utils/defaults';

const propError = (propName, values) => console.error(`\`${propName}\` must be one of ${values}`);

export default {
  name: 'SSpinner',

  props: {
    color: {
      type: String,
      default: () => defaults.spinnerColor,
      validator: c => !c || colors.includes(c) || propError('color', colors),
    },

    size: {
      type: String,
      default: () => defaults.spinnerColor,
      validator: s => !s || sizes.includes(s) || propError('size', sizes),
    },
  },

  computed: {
    classList () {
      return {
        [`spinner--${this.size}`]: this.size,
        [`spinner--color-${this.color}`]: this.color,
      };
    },
  },
};
</script>

<style lang="scss">
.spinner {
  @include spinner-dimensions(spacing('loose'));

  animation: spin duration('slowest') linear infinite;
  fill: none;
  stroke: color('night', 'lightest');
  stroke-dasharray: 66;
  stroke-linecap: round;
  stroke-width: 2;

  &--small {
    @include spinner-dimensions(spacing('tight'));
  }

  &--regular {
    @include spinner-dimensions(spacing('loose'));
  }

  &--medium {
    @include spinner-dimensions(spacing('double'));
  }

  &--large {
    @include spinner-dimensions(spacing('quadruple'));
  }

  &--xl {
    @include spinner-dimensions(2 * spacing('quadruple'));

    stroke-width: 1.5;
  }

  &--color-green {
    stroke: color('green', 'light');
  }

  &--color-grey-lighter {
    stroke: color('grey', 'lighter');
  }

  &--color-ice {
    stroke: color('ice');
  }

  &--color-blue {
    stroke: color('blue');
  }

  &--color-white {
    stroke: color('white');
  }
}
</style>
