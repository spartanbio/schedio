<template>
  <SLabel
    :for="id"
    :label="label"
    :is-inline="isInline"
    :is-fullwidth="isFullwidth"
    :is-required="required"
    :hide-optional="hideOptional"
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
          'select--has-icon-right': !!iconRight,
        }"
        :multiple="multiple"
        :name="computedName"
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
        :color="iconLeftColor"
        :shade="iconLeftShade"
        class="select__icon select__icon--left"
        aria-hidden="true"
      />

      <SIcon
        v-if="iconRight"
        :icon="iconRight"
        :color="iconRightColor"
        :shade="iconRightShade"
        class="select__icon select__icon--right"
        aria-hidden="true"
      />
    </div>
  </SLabel>
</template>

<script>
import ControlIcons from '@/mixins/ControlIcons.mixin';
import InputText from '@/mixins/InputText.mixin';

export default {
  name: 'SSelect',

  mixins: [InputText, ControlIcons],

  model: {
    event: 'input',
    prop: 'value',
  },

  props: {
    selectOptions: {
      type: [Object, Array],
      required: true,
    },

    placeholder: {
      type: String,
      default: 'Select an option',
    },

    multiple: {
      type: Boolean,
      default: false,
    },

    value: {
      type: [String, Array],
      default: '',
    },
  },

  data () {
    return {
      // <select multiple/> expects array
      selected: this.multiple ? [] : '',
    };
  },

  computed: {
    listeners () {
      // input is handled by `this.watch.selected` and does not need to be caught here
      const { input, ..._listeners } = this.$listeners;

      return {
        ..._listeners,
        // ensure change emits like input
        change: evt => this.$emit('change', this.selected),
      };
    },

    optionsHaveGroups () {
      if (!this.selectOptions) return false;

      return Object.values(this.selectOptions).every(value => Array.isArray(value));
    },
  },

  watch: {
    selected (val) {
      this.$emit('input', val);
    },

    value (val) {
      this.selected = val;
    },
  },

  mounted () {
    if (this.value) this.selected = this.value;
  },

  methods: {
    getValue (option) {
      return option.value || option.label || option;
    },
    getLabel (option) {
      return option.label || option.value || option;
    },
  },
};
</script>

<style lang="scss">
.select {
  @include control;
  @include control-with-icons;

  appearance: none;
  overflow: auto;

  &__icon--right {
    right: spacing('triple') !important;
  }

  &__container {
    &::after {
      @include arrow('down', 'right');

      pointer-events: none;
    }

    &--disabled {
      &::after {
        border-color: color('night', 'lighter');
      }
    }

    &--multiple {
      &::after {
        display: none;
      }

      .select__icon--right {
        right: spacing() + spacing('quarter') !important;
      }
    }
  }
}
</style>
