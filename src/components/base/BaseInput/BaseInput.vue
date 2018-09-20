<template>
  <BaseLabel
    :for="id"
    :is-inline="isInline"
    :is-fullwidth="isFullwidth"
    :label="label">
    <input
      :id="id"
      :name="name"
      v-bind="$attrs"
      :placeholder="placeholder"
      :type="type"
      class="input"
      v-on="listeners">
  </BaseLabel>
</template>

<script>
import { allowed } from './options'
import InputText from '@/components/mixins/InputText.mixin'
/**
 * TODO:
 * [] - account for validation
 * [] - Other inputs
 */

export default {
  name: 'BaseInput',

  mixins: [InputText],

  props: {
    type: {
      type: String,
      default: 'text',
      validator: value => {
        return allowed.includes(value) ? true : console.error(`type must be one of: ${allowed}`)
      }
    }
  }
}
</script>
