<template>
  <SLabel
    :for="id"
    :label="label"
    :is-inline="isInline"
    :is-fullwidth="isFullwidth"
    :is-required="required"
    :hide-optional="hideOptional"
  >
    <div class="textarea__container">
      <textarea
        :id="id"
        v-bind="$attrs"
        :class="{
          'textarea--invalid': isInvalid,
          'textarea--has-icon-left': !!iconLeft,
          'textarea--has-icon-right': !!iconRight,
        }"
        :name="_name"
        :placeholder="placeholder"
        :required="required"
        :rows="$attrs.rows || 10"
        class="textarea"
        v-on="listeners"
      />

      <SIcon
        v-if="iconLeft"
        :icon="iconLeft"
        :color="iconLeftColor"
        :shade="iconLeftShade"
        class="textarea__icon textarea__icon--left"
        aria-hidden="true"
      />

      <SIcon
        v-if="iconRight"
        :icon="iconRight"
        :color="iconRightColor"
        :shade="iconRightShade"
        class="textarea__icon textarea__icon--right"
        aria-hidden="true"
      />
    </div>
  </SLabel>
</template>

<script>
import ControlIcons from '@/mixins/ControlIcons.mixin';
import InputText from '@/mixins/InputText.mixin';

export default {
  name: 'STextarea',

  mixins: [InputText, ControlIcons],
};
</script>

<style lang="scss">
.textarea {
  @include control;
  @include control-with-icons;
}
</style>
