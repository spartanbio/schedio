<template>
  <transition name="fade">
    <div
      v-show="isVisible"
      :class="classList"
      class="toast"
    >
      <!-- Icon -->
      <div
        v-if="toastType && hasIcon"
        class="toast__icon"
      >
        <SIcon
          :icon="toastIcon"
          :icon-color="toastIconColor"
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
import { toastTypes, positions } from './options'

export default {
  name: 'SToast',

  components: {
    SIcon
  },

  mixins: [NotificationMixin],

  props: {
    toastType: {
      type: String,
      default: '',
      validator: v => {
        return (
          toastTypes.includes(v) ||
          console.error(`\`toastType\` should be one of ${toastTypes.join(', ')}`)
        )
      }
    },

    hasIcon: {
      type: Boolean,
      default: true
    },

    toastTitle: {
      type: String,
      default: ''
    },

    toastBody: {
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
        [`toast--${this.toastType}`]: this.toastType,
        [`toast--${this.position}`]: this.position
      }
    },

    toastIcon() {
      const stateMap = {
        error: 'alert-circle',
        warning: 'alert-triangle',
        success: 'check-circle'
      }

      return stateMap[this.toastType]
    },

    toastIconColor() {
      const stateMap = {
        error: 'red',
        warning: 'gold',
        success: 'green'
      }

      return stateMap[this.toastType]
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
