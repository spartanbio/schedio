<template>
  <div class="progress-bar">
    <div
      :class="progressBarClassList"
      class="progress-bar__background"
    >
      <progress
        :value="computedProgress"
        class="progress-bar__progress"
        max="100"
      />
      <div
        :class="progressIndicatorClassList"
        :style="{ width: `${computedProgress}%` }"
        class="progress-bar__indicator"
      />
    </div>
    <div
      v-if="computedMessage"
      class="progress-bar__message"
    >
      {{ computedMessage }}
    </div>
  </div>
</template>

<script>
import { colors, sizes } from './options';
import defaults from '@/utils/defaults';

const propError = (propName, values) => console.error(`\`${propName}\` must be one of ${values}`);

export default {
  name: 'SProgressBar',

  props: {
    progress: {
      type: [Number, String],
      required: true,
      validator (value) {
        if (value < 0) return console.error('Progress should be at least 0.');
        if (value > 100) return console.error('Progress should be less than 100.');
        return true;
      },
    },

    size: {
      type: String,
      default: '',
      vaidator: s => !s || sizes.includes(s) || propError('size', sizes),
    },

    color: {
      type: String,
      default: () => defaults.progressBarColor,
      vaidator: c => !c || colors.includes(c) || propError('color', colors),
    },

    message: {
      type: String,
      default: () => defaults.progressBarMessage,
    },

    hidePercentComplete: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    computedProgress () {
      if (this.progress < 0) return 0;
      if (this.progress > 100) return 100;
      return this.progress;
    },

    computedMessage () {
      let stack = this.message;
      if (this.message && !this.hidePercentComplete) stack += ': ';
      if (!this.hidePercentComplete) stack += `${this.computedProgress}% complete.`;

      return stack;
    },

    progressBarClassList () {
      return { [`progress-bar__background--${this.size}`]: this.size };
    },

    progressIndicatorClassList () {
      return { [`progress-bar__indicator--color-${this.color}`]: this.color };
    },
  },
};
</script>

<style lang="scss">
.progress-bar {
  margin-top: spacing();

  &:not(:last-child) {
    margin-bottom: spacing();
  }

  &__background {
    background-color: color('grey', 'lighter');
    border-radius: border-radius('small');
    // provides some accessibility/contrast
    box-shadow: inset 0 0 1px color('night', 'light');
    height: spacing('half');
    margin-bottom: spacing('half');
    position: relative;

    &--small {
      height: spacing('half');
    }

    &--medium {
      height: spacing();
    }

    &--large {
      height: spacing('double');
    }
  }

  &__progress {
    height: 0;
    opacity: 0;
    overflow: hidden;
    width: 0;
  }

  &__indicator {
    background-color: color('green', 'light');
    border-radius: inherit;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: width duration('fast') easing('ease-out');

    @each $color-name in $button-colors {
      &--color-#{$color-name} {
        background-color: color($color-name);
      }
    }
  }

  &__message {
    text-align: center;
  }
}
</style>
