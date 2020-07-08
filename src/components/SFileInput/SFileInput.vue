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
        <!-- input receives non-drag events -->
        <input
          :id="id"
          v-bind="$attrs"
          :label="label"
          :name="computedName"
          type="file"
          class="file-input__control"
          v-on="listeners.nondragListeners"
        >

        <!-- only handles drag listeners when component is not a button -->
        <div
          class="file-input__display"
          :class="{
            'file-input__display--invalid': isInvalid,
            'file-input__display--dragover': hasDragover,
          }"
          v-on="listeners.dragListeners"
        >
          <SIcon
            v-if="!hideIcon && isDroppable"
            icon="upload-cloud"
            size="large"
            class="file-input__icon"
            aria-hidden="true"
          />

          {{ displayText }}
        </div>

        <span
          v-if="!$attrs.disabled && !hideCount"
          class="file-input__count"
        >{{ fileCountText }}</span>
      </div>
    </SLabel>

    <output class="file-input__info">
      <p
        v-if="maxSize"
        class="file-input__limit"
      >
        Maximum file size: {{ maxSize }} bytes
      </p>

      <SChipGroup
        v-show="fileList.length"
        tag="ul"
        class="file-input__list"
      >
        <SChip
          v-for="(file) in fileList"
          :key="file.name"
          tag="li"
          is-closable
          :close-aria-label="`Remove ${file.name}`"
          @close="() => removeFile({ idx })"
        >
          {{ file.name }}
        </SChip>
      </SChipGroup>
    </output>
  </div>
</template>

<script>
import InputProps from '@/mixins/InputProps.mixin';
import { SLabel } from '@/components/SLabel';
import { SChip } from '@/components/SChip';
import { SChipGroup } from '@/components/SChipGroup';
import { SIcon } from '@/components/SIcon';
import defaults from '@/utils/defaults';

export default {
  name: 'SFileInput',

  components: {
    SLabel,
    SChip,
    SChipGroup,
    SIcon,
  },

  mixins: [InputProps],

  inheritAttrs: false,

  model: {
    event: 'input',
    prop: 'files',
  },

  props: {
    maxSize: {
      default: null,
      type: [Number, String],
    },

    text: {
      default: () => defaults.fileInputText,
      type: String,
    },

    isDroppable: {
      default: () => defaults.fileInputIsDroppable,
      type: Boolean,
    },

    hideIcon: {
      default: () => defaults.fileInputHideIcon,
      type: Boolean,
    },

    hideCount: {
      default: () => defaults.fileInputHideCount,
      type: Boolean,
    },

    files: {
      default: () => [],
      type: Array,
    },
  },

  data () {
    return {
      fileList: [],
      hasDragover: false,
    };
  },

  computed: {
    fileNames () {
      return this.fileList.map(file => file.name);
    },

    displayText () {
      const defaultText = this.$attrs.multiple ? 'Choose files' : 'Choose a file';

      if (this.isDroppable) return `Drag and drop or click here to ${defaultText.toLowerCase()}`;

      return this.text || defaultText;
    },

    fileCountText () {
      const count = this.fileList.length;
      let text = `${count} file`;

      if (count !== 1) text += 's';

      return `${text} selected`;
    },

    classList () {
      return {
        'file-input--droppable': this.isDroppable,
        'file-input--multipe': this.$attrs.multiple,
      };
    },

    listeners () {
      const { dragenter, dragover, dragleave, drop, ...otherListeners } = this.$listeners;
      let dragListeners = {};

      if (this.isDroppable) {
        dragListeners = {
          dragenter: evt => this.handleDragenter(evt),
          dragover: evt => this.handleDragover(evt),
          dragleave: evt => this.handleDragleave(evt),
          drop: evt => this.handleDrop(evt),
        };
      }

      const nondragListeners = {
        ...otherListeners,
        input: evt => this.handleFiles(evt),
      };

      return { nondragListeners, dragListeners };
    },
  },

  watch: {
    files (val) {
      this.fileList = val;
    },

    fileList (val) {
      this.$emit('input', this.fileList);
    },
  },

  methods: {
    handleFiles (event) {
      const eventItem = event.dataTransfer ? event.dataTransfer : event.target;
      const filesArray = eventItem.files.length ? Array.from(eventItem.files) : [];
      const { invalid, valid } = this.getValidFiles(filesArray);

      if (invalid.length > 0) {
        const payload = invalid.map(({ name, failed }) => ({ name, failed }), []);
        this.$emit('error', { payload });
      }

      this.fileList = this.$attrs.multiple ? [...this.fileList, ...valid] : valid;

      // reset the input value
      event.target.value = null;
    },
    /**
     * Validates files
     * @param {Array.<File>} files - The array of files
     *
     * @return {{ invalid: File[], valid: File[] }} - An object of valid and invalid files
     */
    getValidFiles (files) {
      const validate = ({ invalid, valid }, file) => {
        const { isValid, failed } = this.checkValidations(file);

        if (isValid) {
          valid.push(file);
        } else {
          file.failed = failed;
          invalid.push(file);
        }

        return { invalid, valid };
      };

      return files.reduce(validate, { invalid: [], valid: [] });
    },

    checkValidations (file) {
      const toValidate = [
        {
          type: 'exceeds max size',
          isValid: this.isValidSize(file),
        },
        {
          type: 'duplicate name',
          isValid: this.hasUniqueName(file),
        },
      ];

      const failed = toValidate.reduce((r, { isValid, type }) => (isValid ? r : r.concat(type)), []);

      return { isValid: failed.length === 0, failed };
    },

    isValidSize (file) {
      return this.maxSize ? file.size <= this.maxSize : true;
    },

    hasUniqueName (file) {
      return this.$attrs.multiple ? !this.fileNames.includes(file.name) : true;
    },

    handleDragenter (event) {
      this.stopAndPrevent(event);
      this.hasDragover = true;
    },

    handleDragleave (event) {
      this.stopAndPrevent(event);
      this.hasDragover = false;
    },

    handleDrop (event) {
      this.stopAndPrevent(event);
      this.hasDragover = false;
      this.handleFiles(event);
    },

    handleDragover (event) {
      this.stopAndPrevent(event);
    },

    stopAndPrevent (event) {
      event.stopPropagation();
      event.preventDefault();
    },

    removeFile ({ idx }) {
      this.fileList.splice(idx, 1);
    },
  },
};
</script>

<style lang="scss">
.file-input {
  // bind parent class name
  $parent: &;

  display: inline-block;

  // hides the default element
  &__control {
    @include control-invisible-base;

    &:focus ~ #{$parent}__display {
      @include control-focused;
    }
  }

  // inner wrapper around control and count
  &__inner {
    align-items: center;
    display: flex;
    font-weight: font-weight('regular');
    text-transform: none;
  }

  // the element being displayed in place of the <input />
  &__display {
    @include button-base;
    @include button-outline('night');

    &--invalid {
      @include control-invalid;

      border: none !important;
    }
  }

  // count of files
  &__count {
    margin-left: spacing('half');
  }

  // limit of files
  &__limit {
    @include font-size(6);

    color: color('night', 'lighter');
    margin: spacing() spacing('none');
  }

  // list of files
  &__list {
    padding: spacing('none');
  }

  // an area with an icon
  &--droppable {
    #{$parent}__inner {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
    }

    #{$parent}__icon {
      margin: spacing('half');
      margin-top: spacing('none');
      opacity: 0.2;
      pointer-events: none;
      transition: all duration() easing();
    }

    #{$parent}__display {
      $area-width: 12rem;

      @include control;

      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: spacing('quarter');
      text-align: center;
      width: $area-width;

      &:hover,
      &--dragover {
        background-color: color('ice');
        border-color: color('blue', 'lighter');

        #{$parent}__icon {
          opacity: 0.8;
        }
      }
    }

    #{$parent}__count {
      margin-left: spacing('none');
      margin-top: spacing('half');
    }
  }

  // disabled state
  &__control:disabled {
    pointer-events: none;

    & + #{$parent}__display {
      @include control-disabled;
    }
  }
}
</style>
