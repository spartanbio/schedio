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
      class="radio"
      type="radio"
      v-on="listeners">
    <span :class="{ 'radio__check--invalid': isInvalid }" class="radio__check"/>
  </BaseLabel>
</template>

<script>
import BaseLabel from '@/components/BaseLabel'
import InputControl from '@/components/mixins/InputControl.mixin'
/**
 * TODO:
 * [] - account for validation
 */

export default {
  name: 'BaseRadio',

  components: {
    BaseLabel
  },

  mixins: [InputControl]
}
</script>
