<template>
  <label :for="id" class="label">
    <slot/>
    <input
      :id="id"
      :name="name"
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
 * [] - functional in form
 * [] - additional states
 * [] - Other inputs
 */

export default {
  name: 'BaseInput',

  props: {
    id: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    type: {
      type: String,
      default: 'text',
      validator: v => (allowed.includes(v) ? v : console.error(`type must be one of: ${allowed}`))
    },

    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>
