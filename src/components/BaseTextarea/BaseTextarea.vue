<template>
  <BaseLabel
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
  </BaseLabel>
</template>

<script>
import InputText from '@/components/mixins/InputText.mixin'

export default {
  name: 'BaseInput',

  mixins: [InputText]
}
</script>
