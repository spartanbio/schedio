<template>
  <BaseLabel
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
  </BaseLabel>
</template>

<script>
import { allowed } from './options'
import InputText from '@/components/mixins/InputText.mixin'
/**
 * TODO:
 * [] - other inputs
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
