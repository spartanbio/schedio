<template>
  <SLabel
    :for="id"
    :is-inline="isInline"
    :is-fullwidth="isFullwidth"
    :is-optional="!required"
    :label="label" >
    <input
      v-bind="$attrs"
      :class="{ 'input--invalid': isInvalid }"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :type="type"
      class="input"
      v-on="listeners">
  </SLabel>
</template>

<script>
import { allowed } from './options'
import InputText from '@/mixins/InputText.mixin'
/**
 * TODO:
 * [] - other inputs
 */

export default {
  name: 'SInput',

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
