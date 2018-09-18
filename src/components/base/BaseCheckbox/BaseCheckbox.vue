<template>
  <label :for="id" :class="classList" class="label label--checkbox">
    <slot/>
    <input
      :id="id"
      :name="name"
      v-bind="$attrs"
      type="checkbox"
      class="checkbox"
      v-on="$listeners">
    <span class="checkbox__check"/>
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
  name: 'BaseCheckbox',

  mixins: [InputControl]
}
</script>
