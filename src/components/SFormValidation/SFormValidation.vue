<template>
  <Transition name="fade">
    <div
      :class="classList"
      class="form-validation"
    >
      <div
        v-if="icons[state] && !hideIcon"
        class="form-validation__icon"
      >
        <SIcon
          :icon="icons[state]"
          :color="iconColors[state] || 'night'"
          aria-hidden="true"
        />
      </div>

      <div class="form-validation__text">
        <slot>{{ text }}</slot>
      </div>
    </div>
  </Transition>
</template>

<script>
import { SIcon } from '@/components/SIcon';
import { states } from './options';

export default {
  name: 'SFormValidation',

  components: {
    SIcon,
  },

  props: {
    text: {
      type: String,
      default: '',
    },

    state: {
      type: String,
      default: 'error',
      validator: (v) => {
        return (
          states.includes(v) || console.error(`\`state\` should be one of ${states.join(', ')}`)
        );
      },
    },

    icon: {
      type: String,
      default: '',
    },

    hideIcon: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      iconColors: {
        success: 'green',
        warning: 'gold',
        error: 'red',
      },
    };
  },

  computed: {
    classList () {
      return {
        [`form-validation--${this.state}`]: this.state,
      };
    },

    icons () {
      if (this.icon) return { [this.state]: this.icon };

      return {
        success: 'check-circle',
        warning: 'alert-triangle',
        error: 'alert-circle',
      };
    },
  },
};
</script>

<style lang="scss">
.form-validation {
  display: flex;
  margin-top: spacing('half');

  &--success {
    color: color('green', 'dark');
  }

  &--warning {
    color: color('gold', 'dark');
  }

  &--error {
    color: color('red');
  }

  &__icon {
    flex: none;
    margin-right: spacing('half');
  }

  &__text {
    flex: auto;
  }
}
</style>
