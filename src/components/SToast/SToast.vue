<template>
  <Transition name="fade">
    <div
      v-show="isVisible"
      :class="classList"
      class="toast"
    >
      <!-- Icon -->
      <div
        v-if="type && !hideIcon"
        class="toast__icon"
      >
        <SIcon
          :icon="toastIcon"
          :color="toastIconColor"
          aria-hidden="true"
        />
      </div>

      <!-- Content -->
      <div
        v-if="hasContent.any"
        class="toast__text"
      >
        <!-- Title -->
        <div
          v-if="hasContent.title"
          class="toast__title"
        >
          {{ title }}
        </div>

        <!-- Body -->
        <div
          v-if="hasContent.body"
          class="toast__body"
        >
          {{ body }}
        </div>
      </div>

      <button
        v-if="action && (typeof action === 'function')"
        class="toast__action"
        @click="clickHandler"
      >
        {{ actionText }}
      </button>
    </div>
  </Transition>
</template>

<script>
import NotificationMixin from '@/mixins/Notification.mixin';
import { SIcon } from '@/components/SIcon';
import { types, positions } from './options';

export default {
  name: 'SToast',

  components: {
    SIcon,
  },

  mixins: [NotificationMixin],

  props: {
    type: {
      type: String,
      default: '',
      validator: (v) => {
        return types.includes(v) || console.error(`\`type\` should be one of ${types.join(', ')}`);
      },
    },

    hideIcon: {
      type: Boolean,
      default: false,
    },

    title: {
      type: String,
      default: '',
    },

    body: {
      type: String,
      default: '',
    },

    action: {
      type: Function,
      default: null,
    },

    actionText: {
      type: String,
      default: 'OK',
    },

    position: {
      type: String,
      default: '',
      validator: (v) => {
        return (
          positions.includes(v) ||
          console.error(`\`position\` should be one of ${positions.join(', ')}`)
        );
      },
    },
  },

  computed: {
    classList () {
      return {
        [`toast--${this.type}`]: this.type,
        [`toast--${this.position}`]: this.position,
      };
    },

    toastIcon () {
      const stateMap = {
        error: 'alert-circle',
        warning: 'alert-triangle',
        success: 'check-circle',
      };

      return stateMap[this.type];
    },

    toastIconColor () {
      const stateMap = {
        error: 'red',
        warning: 'gold',
        success: 'green',
      };

      return stateMap[this.type];
    },

    hasContent () {
      const title = this.text || this.$slots.title;
      const body = this.body || this.$slots.default;
      const any = title || body;

      return { any, title, body };
    },
  },

  mounted () {
    if (!this.hasContent.any) console.error('`SToast` requires title or body text');
  },

  methods: {
    clickHandler () {
      this.action();
      this.closeNotification();
    },
  },
};
</script>

<style lang="scss">
.toast {
  align-items: center;
  background-color: color('white');
  border-radius: border-radius('small');
  bottom: spacing();
  box-shadow: shadow('border'), shadow();
  display: flex;
  flex: 0 0 auto;
  margin: spacing();
  max-width: 44rem;
  pointer-events: auto;
  z-index: 500;

  & + & {
    margin-bottom: spacing('none');
  }

  &__icon {
    align-items: center;
    display: flex;
    padding: spacing();
  }

  &__text {
    padding: spacing();

    &:not(:first-child) {
      padding-left: 0;
    }

    &:not(:last-child) {
      padding-right: spacing('half');
    }
  }

  &__title {
    font-weight: font-weight('bold');
    text-transform: uppercase;
  }

  &__action {
    align-self: stretch;
    background-color: transparent;
    border-bottom-right-radius: border-radius('small');
    border-top-right-radius: border-radius('small');
    color: color('blue');
    padding: spacing();

    &:hover {
      background-color: color('grey', 'lighter');
    }

    &:active {
      background-color: color('grey', 'light');
    }
  }

  &--warning {
    .toast__action {
      color: color('gold', 'dark');
    }
  }

  &--error {
    .toast__action {
      color: color('red');
    }
  }

  &--success {
    .toast__action {
      color: color('green', 'dark');
    }
  }

  &--right {
    align-self: flex-end;
  }

  &--center {
    align-self: center;
  }
}
</style>
