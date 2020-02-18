<template>
  <SLabel
    :for="id"
    :is-inline="isInline"
    :is-fullwidth="isFullwidth"
    :is-required="required"
    :hide-optional="hideOptional"
    :label="label"
  >
    <div class="input__container">
      <input
        :id="id"
        v-bind="$attrs"
        :class="{
          'input--invalid': isInvalid,
          'input--has-icon-left': !!iconLeft,
          'input--has-icon-right': !!iconRight,
        }"
        :name="computedName"
        :placeholder="placeholder"
        :required="required"
        :type="type"
        class="input"
        v-on="listeners"
      >

      <SIcon
        v-if="iconLeft"
        :icon="iconLeft"
        :color="iconLeftColor"
        :shade="iconLeftShade"
        class="input__icon input__icon--left"
        aria-hidden="true"
      />

      <SIcon
        v-if="iconRight"
        :icon="iconRight"
        :color="iconRightColor"
        :shade="iconRightShade"
        class="input__icon input__icon--right"
        aria-hidden="true"
      />
    </div>
  </SLabel>
</template>

<script>
import { allowed } from './options'
import InputText from '@/mixins/InputText.mixin'
import ControlIcons from '@/mixins/ControlIcons.mixin'

/**
 * TODO:
 * [] - other inputs
 */

export default {
  name: 'SInput',

  mixins: [InputText, ControlIcons],

  props: {
    type: {
      type: String,
      default: 'text',
      validator: (value) => {
        return !value || allowed.includes(value) || console.error(`type must be one of: ${allowed}`)
      },
    },
  },
}
</script>

<style lang="scss">
.input {
  @include control;
  @include control-with-icons;
}
</style>
