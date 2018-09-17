<template>
  <label :for="$attrs.id" class="label">
    <slot/>
    <input
      v-bind="$attrs"
      :placeholder="placeholder"
      class="base-input"
      v-on="$listeners">
  </label>
</template>

<script>
import { allowed } from './options'

/**
 * TODO:
 * [] - account for validation
 * [] - Other inputs
 */

export default {
  name: 'BaseInput',

  props: {
    id: {
      type: String,
      required: true
    },

    type: {
      type: String,
      default: 'text',
      validator: v => (allowed.includes(v) ? v : console.error(`type must be one of: ${allowed}`))
    },

    label: {
      type: String,
      required: true
    },

    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>
