<template>
  <SLabel
    :for="id"
    :label="label"
    :is-inline="isInline"
    :is-fullwidth="isFullwidth"
    :is-optional="!required">
    <textarea
      v-bind="$attrs"
      :class="{ 'textarea--invalid': isInvalid }"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :rows="$attrs.rows || 10"
      class="textarea"
      v-on="listeners"/>
  </SLabel>
</template>

<script>
import InputText from '@/mixins/InputText.mixin'

export default {
  name: 'STextarea',

  mixins: [InputText]
}
</script>
