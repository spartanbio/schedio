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
      :class="{ [`switch--${size}`]: size }"
      class="switch"
      :checked="!!value"
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
      validator: (size) => {
        return !size ||
          (
            sizes.includes(size) ||
            console.error(`\`size\` must be one of ${sizes}`)
          )
      },
    },
  },
}
</script>

<style lang="scss">
.switch {
  @include switch;

  &--base ~ &__check {
    @include switch-size('base');
  }

  &--medium ~ &__check {
    @include switch-size('medium');
  }

  &--large ~ &__check {
    @include switch-size('large');
  }
}
</style>
