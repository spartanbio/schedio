<template>
  <SLabel
    :for="id"
    :label="label"
    :is-inline="isInline"
    :is-fullwidth="isFullwidth"
    :is-optional="!required"
    :show-optional="showOptional"
  >
    <div
      :class="{
        'select__container--multiple': multiple,
        'select__container--disabled': $attrs.disabled,
      }"
      class="select__container"
    >
      <select
        :id="id"
        v-model="selected"
        v-bind="$attrs"
        :class="{
          'select--invalid': isInvalid,
          'select--has-icon-left': !!iconLeft,
          'select--has-icon-right': !!iconRight
        }"
        :multiple="multiple"
        :name="name"
        :required="required"
        class="select"
        v-on="listeners"
      >
        <option
          :hidden="!multiple"
          :selected="!multiple"
          value=""
          disabled
        >
          {{ placeholder }}
        </option>

        <template v-if="optionsHaveGroups">
          <optgroup
            v-for="(group, groupName) in selectOptions"
            :key="groupName"
            :label="groupName"
          >
            <option
              v-for="(option, key) in group"
              :key="key"
              :value="getValue(option)"
            >
              {{ getLabel(option) }}
            </option>
          </optgroup>
        </template>

        <template v-else>
          <option
            v-for="(option, key) in selectOptions"
            :key="key"
            :value="getValue(option)"
          >
            {{ getLabel(option) }}
          </option>
        </template>
      </select>

      <SIcon
        v-if="iconLeft"
        :icon="iconLeft"
        :icon-color="iconLeftColor"
        class="select__icon select__icon--left"
      />

      <SIcon
        v-if="iconRight"
        :icon="iconRight"
        :icon-color="iconRightColor"
        class="select__icon select__icon--right"
      />
    </div>
  </SLabel>
</template>

<script>
import ControlIcons from '@/mixins/ControlIcons.mixin'
import InputText from '@/mixins/InputText.mixin'

export default {
  name: 'SSelect',

  mixins: [InputText, ControlIcons],

  props: {
    selectOptions: {
      type: [Object, Array],
      required: true
    },

    placeholder: {
      type: String,
      default: 'Select an option'
    },

    multiple: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      // <select multiple/> expects array
      selected: this.multiple ? [] : ''
    }
  },

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value),
        change: event => this.$emit('change', event.target.value)
      }
    },

    optionsHaveGroups() {
      if (!this.selectOptions) return false

      return Object.values(this.selectOptions).every(value => Array.isArray(value))
    }
  },

  methods: {
    getValue(option) {
      return option.value || option.label || option
    },
    getLabel(option) {
      return option.label || option.value || option
    }
  }
}
</script>
