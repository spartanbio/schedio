<template>
  <SLabel
    :for="id"
    :is-inline="isInline"
    :is-fullwidth="isFullwidth"
    :is-optional="!required"
    :show-optional="showOptional"
    :label="label"
  >
    <div class="input__container">
      <input
        :id="id"
        v-bind="$attrs"
        :class="{
          'input--invalid': isInvalid,
          'input--has-icon-left': !!iconLeft,
          'input--has-icon-right': !!iconRight
        }"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        :type="type"
        class="input"
        v-on="listeners"
      >

      <SIcon
        v-if="iconLeft"
        :icon="iconLeft"
        :icon-color="iconLeftColor"
        class="input__icon input__icon--left"
      />

      <SIcon
        v-if="iconRight"
        :icon="iconRight"
        :icon-color="iconRightColor"
        class="input__icon input__icon--right"
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
      validator: value => {
        return !value || allowed.includes(value) || console.error(`type must be one of: ${allowed}`)
      }
    }
  }
}
</script>
