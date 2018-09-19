<template>
  <BaseLabel :for="id" :is-inline="isInline" :is-fullwidth="isFullwidth">
    <slot/>
    <textarea
      :id="id"
      :name="name"
      v-bind="$attrs"
      :placeholder="placeholder"
      :rows="$attrs.rows || 10"
      class="textarea"
      v-on="$listeners"/>
  </BaseLabel>
</template>

<script>
import InputText from '@/components/mixins/InputText.mixin'
/**
 * TODO:
 * [] - account for validation
 * [] - functional in form
 * [] - Other inputs
 */

export default {
  name: 'BaseInput',

  mixins: [InputText]
}
</script>
