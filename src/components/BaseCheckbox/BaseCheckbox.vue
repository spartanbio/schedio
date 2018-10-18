<template>
  <BaseLabel
    :for="id"
    :label="label"
    :is-reversed="isReversed"
    :is-optional="!required"
    is-inline>
    <input
      v-bind="$attrs"
      :id="id"
      :name="name"
      :required="required"
      class="checkbox"
      type="checkbox"
      v-on="listeners">
    <span :class="{ 'checkbox__check--invalid': isInvalid }" class="checkbox__check"/>
  </BaseLabel>
</template>

<script>
import BaseLabel from '@/components/BaseLabel'
import InputControl from '@/components/mixins/InputControl.mixin'

export default {
  name: 'BaseCheckbox',

  components: {
    BaseLabel
  },

  mixins: [InputControl]
}
</script>
