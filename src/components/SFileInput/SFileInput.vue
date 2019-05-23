<template>
  <div
    class="file-input"
    :class="classList"
  >
    <SLabel
      :for="id"
      :is-required="required"
      :hide-optional="hideOptional"
      :label="label"
    >
      <div class="file-input__inner">
        <input
          :id="id"
          v-bind="$attrs"
          :label="label"
          :name="name"
          type="file"
          class="file-input__control"
          v-on="listeners"
          @change="handleChange"
        >
        <div
          class="file-input__display"
          :class="{
            'file-input__display--invalid': isInvalid
          }"
        >
          <SIcon
            v-if="!hideIcon && type === 'area'"
            icon="upload-cloud"
            size="large"
            class="file-input__icon"
          />

          {{ displayText }}
        </div>

        <span
          v-if="!$attrs.disabled && !hideCount"
          class="file-input__count"
        >{{ fileCountText }}</span>
      </div>
    </SLabel>

    <div class="file-input__info">
      <p
        v-if="maxSize"
        class="file-input__limit"
      >
        Maximum file size: {{ maxSize }} bytes
      </p>

      <ul class="file-input__list">
        <li
          v-for="(file, idx) in fileList"
          :key="file.name"
          class="file-input__list-item"
        >
          {{ file.name }}
          <SButton
            icon-left="trash-2"
            icon-only
            size="small"
            @click="deleteThis({ idx })"
          >
            Delete
          </SButton>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import InputListeners from '@/mixins/InputListeners.mixin'
import InputProps from '@/mixins/InputProps.mixin'
import { types } from './options'
import { SLabel } from '@/components/SLabel'

export default {
  name: 'SFileInput',

  components: {
    SLabel
  },

  mixins: [InputListeners, InputProps],

  inheritAttrs: false,

  props: {
    maxSize: {
      default: null,
      type: [Number, String]
    },

    text: {
      default: '',
      type: String
    },

    type: {
      default: types[0],
      type: String,
      validator: v => types.includes(v) || console.error(`\`type\` must be one of ${types}`)
    },

    hideIcon: {
      default: false,
      type: Boolean
    },

    hideCount: {
      default: false,
      type: Boolean
    }
  },

  data() {
    return {
      fileList: []
    }
  },

  computed: {
    fileNames() {
      return this.fileList.map(file => file.name)
    },

    displayText() {
      const defaultDisplayText = this.$attrs.multiple ? 'Choose files' : 'Choose a file'

      return this.text || defaultDisplayText
    },

    fileCountText() {
      const count = this.fileList.length
      let text = `${count} file`

      if (count !== 1) text += 's'

      return `${text} selected`
    },

    classList() {
      return {
        [`file-input--${this.type}`]: this.type,
        'file-input--multipe': this.$attrs.multiple
      }
    }
  },

  methods: {
    handleChange(event) {
      const { invalid, valid } = this.getValidFiles(Array.from(event.target.files))

      if (invalid.length > 0) {
        const payload = invalid.map(({ name, failed }) => ({ name, failed }), [])
        this.$emit('error', { payload })
      }

      this.fileList = this.$attrs.multiple ? [...this.fileList, ...valid] : valid
    },
    /**
     * Validates files
     * @param {Array.<File>} files - The array of files
     *
     * @return {{ invalid: File[], valid: File[] }} - An object of valid and invalid files
     */
    getValidFiles(files) {
      const validate = ({ invalid, valid }, file) => {
        const { isValid, failed } = this.checkValidations(file)

        if (isValid) {
          valid.push(file)
        } else {
          file.failed = failed
          invalid.push(file)
        }

        return { invalid, valid }
      }

      return files.reduce(validate, { invalid: [], valid: [] })
    },

    checkValidations(file) {
      const toValidate = [
        {
          type: 'exceeds max size',
          isValid: this.isValidSize(file)
        },
        {
          type: 'duplicate name',
          isValid: this.hasUniqueName(file)
        }
      ]

      const failed = toValidate.reduce((r, { isValid, type }) => (isValid ? r : r.concat(type)), [])

      return { isValid: failed.length === 0, failed }
    },

    isValidSize(file) {
      return this.maxSize ? file.size <= this.maxSize : true
    },

    hasUniqueName(file) {
      return !this.fileNames.includes(file.name)
    },

    deleteThis({ idx }) {
      this.fileList.splice(idx, 1)
    }
  }
}
</script>
