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
/**
 * TODO:
 * [] - account for validation
 * [] - functional in form
 * [] - Other inputs
 * [] - additional states
 */

export default {
  name: 'BaseRadio',

  props: {
    id: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    isReversed: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classList() {
      return [this.isReversed ? 'label--reversed' : '']
    }
  }
}
</script>
