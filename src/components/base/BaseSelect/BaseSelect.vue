<template>
  <BaseLabel :for="id" :is-inline="isInline" :is-fullwidth="isFullwidth">
    <slot/>
    <div class="select-wrapper">
      <select
        v-bind="$attrs"
        :id="id"
        :name="name"
        class="select"
        v-on="listeners">
        <option
          value=""
          disabled
          selected
          data-default
          hidden>{{ placeholder }}</option>
        <option v-for="(option, key) in selectOptions" :key="key" :value="getValue(option)">
          {{ getLabel(option) }}
        </option>
      </select>
    </div>
  </BaseLabel>
</template>

<script>
import InputText from '@/components/mixins/InputText.mixin'
export default {
  name: 'BaseSelect',

  mixins: [InputText],

  props: {
    selectOptions: {
      type: [Object, Array],
      required: true
    },

    placeholder: {
      type: String,
      default: 'Select an option'
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
