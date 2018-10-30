<template>
  <SLabel
    :for="id"
    :label="label"
    :is-inline="isInline"
    :is-fullwidth="isFullwidth"
    :is-optional="!required">

    <div :class="{ 'select-wrapper--multiple': multiple }" class="select-wrapper">

      <select
        v-model="selected"
        v-bind="$attrs"
        :class="{ 'select--invalid': isInvalid }"
        :id="id"
        :multiple="multiple"
        :name="name"
        :required="required"
        class="select"
        v-on="listeners">

        <option
          :hidden="!multiple"
          :selected="!multiple"
          value=""
          disabled>
          {{ placeholder }}
        </option>

        <template v-if="optionsHaveGroups">
          <optgroup v-for="(group, groupName) in selectOptions" :label="groupName" :key="groupName">
            <option v-for="(option, key) in group" :key="key" :value="getValue(option)">
              {{ getLabel(option) }}
            </option>
          </optgroup>
        </template>

        <template v-else>
          <option v-for="(option, key) in selectOptions" :key="key" :value="getValue(option)">
            {{ getLabel(option) }}
          </option>
        </template>

      </select>
    </div>
  </SLabel>
</template>

<script>
import InputText from '@/mixins/InputText.mixin'

export default {
  name: 'SSelect',

  mixins: [InputText],

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
        input: event => this.$emit('input', this.selected),
        change: event => this.$emit('input', this.selected)
      }
    },

    optionsHaveGroups() {
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
