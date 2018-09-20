<template>
  <BaseLabel :for="id" :is-inline="isInline" :is-fullwidth="isFullwidth">

    <slot/>

    <div :class="{ 'select-wrapper--multiple': multiple }" class="select-wrapper">

      <select
        v-model="selected"
        v-bind="$attrs"
        :multiple="multiple"
        :id="id"
        :name="name"
        class="select"
        v-on="listeners">

        <option
          :hidden="!multiple"
          :selected="!multiple"
          value=""
          disabled>{{ placeholder }}</option>

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
    },

    multiple: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
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
