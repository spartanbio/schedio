<template>
  <SLabel
    :for="id"
    :label="label"
    :is-reversed="isReversed"
    :is-required="required"
    :hide-optional="hideOptional"
    is-inline
  >
    <input
      :id="id"
      v-bind="$attrs"
      :name="name"
      :required="required"
      class="checkbox"
      type="checkbox"
      v-on="listeners"
    >
    <span
      :class="{ 'checkbox__check--invalid': isInvalid }"
      class="checkbox__check"
    />
  </SLabel>
</template>

<script>
import InputControl from '@/mixins/InputControl.mixin'

export default {
  name: 'SCheckbox',

  mixins: [InputControl]
}
</script>
