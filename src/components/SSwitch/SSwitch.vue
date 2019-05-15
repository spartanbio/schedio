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
      :class="{ [`switch--${size}`]: size }"
      class="switch"
      type="checkbox"
      v-on="listeners"
    >
    <span
      :class="{ 'switch__check--invalid': isInvalid }"
      class="switch__check"
    />
  </SLabel>
</template>

<script>
import InputControl from '@/mixins/InputControl.mixin'

const sizes = ['small', 'medium', 'large']

export default {
  name: 'SSwitch',

  mixins: [InputControl],

  props: {
    size: {
      type: String,
      default: '',
      validator: s => !s || (sizes.includes(s) || console.error(`\`size\` must be one of ${sizes}`))
    }
  }
}
</script>
