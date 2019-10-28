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
.radio {
  @include check-or-radio {
    border-radius: border-radius('circle');
  }

  & ~ &__check::after {
    background-color: color('green');
    border-radius: border-radius('circle');
    content: '';
    height: 10px;
    left: 50%;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    transition: all duration() ease;
    width: 10px;
  }

  &:checked ~ &__check::after {
    opacity: 1;
  }
}
</style>
