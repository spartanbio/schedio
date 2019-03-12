<template>
  <component
    :is="cellType"
    v-bind="$attrs"
    :class="{ 'table__cell--numeric': isNumeric }"
    class="table__cell"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'STableCell',

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
  },

  updated() {
    if (this.isNumeric && isFinite(this.$el.innerText)) {
      this.$el.innerText = Number(this.$el.innerText).toLocaleString()
    }
  }
}
</script>
