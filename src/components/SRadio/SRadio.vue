<template>
  <SLabel
    :for="id"
    :label="label"
    :is-reversed="isReversed"
    :is-optional="!required"
    :show-optional="showOptional"
    is-inline
  >
    <input
      v-bind="$attrs"
      :id="id"
      :name="name"
      :required="required"
      class="radio"
      type="radio"
      v-on="listeners"
    >
    <span
      :class="{ 'radio__check--invalid': isInvalid }"
      class="radio__check"
    />
  </SLabel>
</template>

<script>
import InputControl from '@/mixins/InputControl.mixin'

export default {
  name: 'SRadio',

  mixins: [InputControl]
}
</script>
