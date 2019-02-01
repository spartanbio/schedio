<template>
  <div
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
        <slot name="title">
          {{ toastTitle }}
        </slot>
      </div>

      <!-- Body -->
      <div
        v-if="hasContent.body"
        class="toast__body"
      >
        <slot>
          {{ toastBody }}
        </slot>
      </div>
    </div>

    <button
      v-if="action && (typeof action === 'function')"
      class="toast__action"
      @click="clickHandler"
    >Do something</button>
  </div>
</template>

<script>
import { SIcon } from '@/components/SIcon'
import { toastTypes } from './options'

export default {
  name: 'SToast',

  components: {
    SIcon
  },

  props: {
    toastType: {
      type: String,
      required: true,
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
    }
  },

  computed: {
    classList() {
      return {
        [`toast--${this.toastType}`]: this.toastType
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
    }
  }
}
</script>
