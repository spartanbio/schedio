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
      type="checkbox"
      class="checkbox"
      v-on="listeners">
    <span class="checkbox__check"/>
  </BaseLabel>
</template>

<script>
import BaseLabel from '@/components/BaseLabel'
import InputControl from '@/components/mixins/InputControl.mixin'
/**
 * TODO:
 * [] - account for validation
 * [] - Other inputs
 */

export default {
  name: 'BaseCheckbox',

  components: {
    BaseLabel
  },

  mixins: [InputControl]
}
</script>
