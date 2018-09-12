<template>
  <div class="color-preview">
    <div :style="{ backgroundColor: color.value }" class="color-preview__example" />
    <div class="color-preview__description">
      <div>
        <strong>Token name: </strong>
        <code>{{ color.name }}</code>
      </div>
      <div>
        <strong>{{ colorSpace }}: </strong>
        <code>{{ color.value }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorChip',

  props: {
    color: {
      type: Object,
      required: true
    }
  },

  computed: {
    colorSpace() {
      return this.color.value[0] === '#' ? 'HEX' : this.color.value.split('(')[0].toUpperCase()
    }
  }
}
</script>

<style lang="scss">
.color-preview {
  $card-dimensions: 4em;

  align-items: center;
  display: flex;
  margin: 1em 0;

  &__example {
    border-radius: $card-dimensions;
    box-shadow: 0 0.5em 1em 0 color('grey');
    height: $card-dimensions;
    width: $card-dimensions;
  }

  &__description {
    margin: 0 1em;
  }
}
</style>
