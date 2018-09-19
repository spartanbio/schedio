<template>
  <BaseLabel :for="id" :is-reversed="isReversed" is-inline>
    <slot/>
    <input
      :id="id"
      :name="name"
      v-bind="$attrs"
      type="radio"
      class="radio"
      v-on="$listeners">
    <span class="radio__check"/>
  </BaseLabel>
</template>

<script>
import BaseLabel from '@/components/base/BaseLabel'
import InputControl from '@/components/mixins/InputControl.mixin'
/**
 * TODO:
 * [] - account for validation
 * [] - functional in form
 * [] - Other inputs
 * [] - additional states
 */

export default {
  name: 'BaseRadio',

  components: {
    BaseLabel
  },

  mixins: [InputControl]
}
</script>
