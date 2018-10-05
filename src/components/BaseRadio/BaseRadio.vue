<template>
  <BaseLabel
    :for="id"
    :is-reversed="isReversed"
    :label="label"
    is-inline>
    <input
      :id="id"
      :name="name"
      v-bind="$attrs"
      type="radio"
      class="radio"
      v-on="listeners">
    <span class="radio__check"/>
  </BaseLabel>
</template>

<script>
import BaseLabel from '@/components//BaseLabel'
import InputControl from '@/components/mixins/InputControl.mixin'
/**
 * TODO:
 * [] - account for validation
 * [] - Other inputs
 */

export default {
  name: 'BaseRadio',

  components: {
    BaseLabel
  },

  mixins: [InputControl]
}
</script>
