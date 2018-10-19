<template>
  <component
    v-bind="$attrs"
    :class="{ 'table__cell--numeric': isNumeric }"
    :is="cellType"
    class="table__cell">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseTableCell',

  props: {
    isHeader: {
      type: Boolean,
      default: false
    },
    isNumeric: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      parentTag: ''
    }
  },

  computed: {
    cellType() {
      return this.isInHeaderRow ? 'th' : 'td'
    },
    isInHeaderRow() {
      return this.isHeader || this.parentTag === 'THEAD'
    }
  },

  mounted() {
    // make $el available to computed
    this.parentTag = this.$parent.$el.parentNode.tagName

    let innerText = this.$el.innerText
    if (this.isNumeric && isFinite(innerText)) {
      this.$el.innerText = Number(innerText).toLocaleString()
    }
  }
}
</script>
