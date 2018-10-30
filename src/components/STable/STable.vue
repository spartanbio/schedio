<template>
  <table
    v-bind="$attrs"
    :class="classList"
    class="table">
    <caption
      v-if="$slots.caption || caption"
      :class="{ 'table__caption--top': hasCaptionTop }"
      class="table__caption">
      <slot name="caption" />

      {{ caption }}
    </caption>

    <thead v-if="!hideHeader && ($slots.header || headerCells.length)" class="table__header">
      <slot name="header"/>

      <STableRow>
        <STableCell v-for="(cell, key) in headerCells" :key="key">
          {{ cell.value || cell | startCase }}
        </STableCell>
      </STableRow>
    </thead>

    <tbody class="table__body">
      <slot />

      <STableRow v-for="(row, key) in tableData" :key="key">
        <STableCell
          v-for="cell in row"
          :key="cell"
          :is-header="cell.header"
          :is-numeric="typeof cell === 'number'">
          {{ cell.value || cell }}
        </STableCell>
      </STableRow>
    </tbody>

    <tfoot v-if="$slots.footer || footerCells.length" class="table__footer">
      <slot name="footer"/>

      <STableRow>
        <STableCell v-for="(cell, key) in footerCells" :key="key">
          {{ cell.value || cell | startCase }}
        </STableCell>
      </STableRow>
    </tfoot>
  </table>
</template>

<script>
import startCase from 'lodash.startcase'

export default {
  name: 'STable',

  filters: {
    startCase
  },

  props: {
    tableData: {
      type: [Array, Object],
      default: () => []
    },
    header: {
      type: [Array, Object],
      default: () => []
    },
    footer: {
      type: [Array, Object],
      default: () => []
    },
    caption: {
      type: String,
      default: ''
    },
    hasCaptionTop: {
      type: Boolean,
      default: false
    },
    headerInFooter: {
      type: Boolean,
      default: false
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    isBordered: {
      type: Boolean,
      default: false
    },
    isHoverable: {
      type: Boolean,
      default: false
    },
    isStriped: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classList() {
      return {
        'table--bordered': this.isBordered,
        'table--hoverable': this.isHoverable,
        'table--striped': this.isStriped
      }
    },

    headerCells() {
      // check keys in case object is passed
      if (Object.keys(this.header).length) return this.header

      const items = Array.isArray(this.tableData) ? this.tableData : Object.values(this.tableData)
      const headers = items.reduce((acc, item) => {
        return Array.isArray(item) ? acc : acc.concat(Object.keys(item))
      }, [])

      // only return unique values
      return [...new Set(headers)]
    },

    footerCells() {
      // give `this.footer` priority
      if (Object.keys(this.footer).length) return this.footer
      // always return something since we only check for this.footerCells.length
      return this.headerInFooter ? this.headerCells : this.footer
    }
  },

  created() {
    // warn if `tableData` prop or default slot not provided.
    // check keys in case object is passed
    if (!Object.keys(this.tableData).length && !this.$slots.default) {
      console.error(`\`${this.$options.name}\` requires \`tableData\` prop or default slot content`)
    }
  }
}
</script>
