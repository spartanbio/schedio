<template>
  <label :for="id" :class="classList" class="label label--radio">
    <slot/>
    <input
      :id="id"
      :name="name"
      v-bind="$attrs"
      type="radio"
      class="radio"
      v-on="$listeners">
    <span class="radio__check"/>
  </label>
</template>

<script>
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

  mixins: [InputControl]
}
</script>
