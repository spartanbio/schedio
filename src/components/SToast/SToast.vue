<template>
  <transition name="fade">
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
          {{ toastTitle }}
        </div>

        <!-- Body -->
        <div
          v-if="hasContent.body"
          class="toast__body"
        >
          {{ toastBody }}
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
  </transition>
</template>

<script>
import NotificationMixin from '@/mixins/Notification.mixin'
import { SIcon } from '@/components/SIcon'
import { types, positions } from './options'

export default {
  name: 'SToast',

  components: {
    SIcon
  },

  mixins: [NotificationMixin],

  props: {
    type: {
      type: String,
      default: '',
      validator: v => {
        return types.includes(v) || console.error(`\`type\` should be one of ${types.join(', ')}`)
      }
    },

    hideIcon: {
      type: Boolean,
      default: false
    },

    title: {
      type: String,
      default: ''
    },

    body: {
      type: String,
      default: ''
    },

    action: {
      type: Function,
      default: null
    },

    actionText: {
      type: String,
      default: 'OK'
    },

    position: {
      type: String,
      default: '',
      validator: v => {
        return (
          positions.includes(v) ||
          console.error(`\`position\` should be one of ${positions.join(', ')}`)
        )
      }
    }
  },

  computed: {
    classList() {
      return {
        [`toast--${this.type}`]: this.type,
        [`toast--${this.position}`]: this.position
      }
    },

    toastIcon() {
      const stateMap = {
        error: 'alert-circle',
        warning: 'alert-triangle',
        success: 'check-circle'
      }

      return stateMap[this.type]
    },

    toastIconColor() {
      const stateMap = {
        error: 'red',
        warning: 'gold',
        success: 'green'
      }

      return stateMap[this.type]
    },

    hasContent() {
      const title = this.toastTitle || this.$slots.title
      const body = this.toastBody || this.$slots.default
      const any = title || body

      return { any, title, body }
    }
  },

  mounted() {
    if (!this.hasContent.any) console.error(`\`SToast\` requires title or body text`)
  },

  methods: {
    clickHandler() {
      this.action()
      this.closeNotification()
    }
  }
}
</script>
