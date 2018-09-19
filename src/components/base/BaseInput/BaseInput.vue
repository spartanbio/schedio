<template>
  <BaseLabel :for="id" :is-inline="isInline" :is-fullwidth="isFullwidth">
    <slot/>
    <input
      :id="id"
      :name="name"
      v-bind="$attrs"
      :placeholder="placeholder"
      :type="type"
      class="input"
      v-on="$listeners">
  </BaseLabel>
</template>

<script>
import { allowed } from './options'
import InputText from '@/components/mixins/InputText.mixin'
/**
 * TODO:
 * [] - account for validation
 * [] - functional in form
 * [] - Other inputs
 */

export default {
  name: 'BaseInput',

  mixins: [InputText],

  props: {
    type: {
      type: String,
      default: 'text',
      validator: v => (allowed.includes(v) ? v : console.error(`type must be one of: ${allowed}`))
    }
  }
}
</script>
