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
      :name="computedName"
      :required="required"
      class="checkbox"
      type="checkbox"
      :checked="!!value"
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

  mixins: [InputControl],

  props: {
    value: {
      type: null,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.checkbox {
  @include check-or-radio {
    border-radius: border-radius('small');
  }

  & ~ &__check::after {
    background-color: transparent !important;
    border: border-width('thick') solid color('green', 'light');
    border-left: none;
    border-top: none;
    content: '';
    height: 0.65rem;
    left: 50%;
    opacity: 0;
    position: absolute;
    top: 45%;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transition: all duration() ease;
    width: 0.35rem;
  }

  &:checked ~ &__check::after {
    opacity: 1;
  }
}
</style>
