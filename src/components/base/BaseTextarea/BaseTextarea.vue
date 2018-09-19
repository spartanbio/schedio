<template>
  <BaseLabel :for="id" :is-inline="isInline" :is-fullwidth="isFullwidth">
    <slot/>
    <textarea
      :id="id"
      :name="name"
      v-bind="$attrs"
      :placeholder="placeholder"
      class="input"
      v-on="$listeners"/>
  </BaseLabel>
</template>

<script>
import BaseLabel from '@/components/base/BaseLabel'
/**
 * TODO:
 * [] - account for validation
 * [] - functional in form
 * [] - additional states
 * [] - Other inputs
 */

export default {
  name: 'BaseInput',

  components: {
    BaseLabel
  },

  inheritAttrs: false,

  props: {
    id: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    placeholder: {
      type: String,
      default: ''
    },

    isInline: {
      type: Boolean,
      default: false
    },

    isFullwidth: {
      type: Boolean,
      default: true
    }
  }
}
</script>
