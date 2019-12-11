<template>
  <div
    class="table__overlay"
    :class="overlayClassList"
  >
    <div class="table__container">
      <table
        v-bind="$attrs"
        :class="tableClassList"
        class="table"
      >
        <caption
          v-if="$slots.caption || caption"
          :class="{ 'table__caption--top': hasCaptionTop }"
          class="table__caption"
        >
          <slot name="caption">
            {{ caption }}
          </slot>
        </caption>

        <thead
          v-if="!hideHeader && ($slots.header || headerCells.length)"
          class="table__header"
        >
          <slot name="header">
            <STableRow>
              <STableCell
                v-for="(cell, key) in headerCells"
                :key="key"
              >
                {{ cell.value || cell | startCase }}
              </STableCell>
            </STableRow>
          </slot>
        </thead>

        <tbody class="table__body">
          <slot>
            <STableRow
              v-for="(row, key) in tableData"
              :key="key"
            >
              <STableCell
                v-for="cell in row"
                :key="cell"
                :is-header="cell.header"
                :is-numeric="typeof cell === 'number'"
              >
                {{ cell.value || cell }}
              </STableCell>
            </STableRow>
          </slot>
        </tbody>

        <tfoot
          v-if="$slots.footer || footerCells.length"
          class="table__footer"
        >
          <slot name="footer">
            <STableRow>
              <STableCell
                v-for="(cell, key) in footerCells"
                :key="key"
              >
                {{ cell.value || cell | startCase }}
              </STableCell>
            </STableRow>
          </slot>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import startCase from 'lodash.startcase'
import { STableRow } from '@/components/STableRow'
import { STableCell } from '@/components/STableCell'

export default {
  name: 'STable',

  components: {
    STableRow,
    STableCell,
  },

  filters: {
    startCase,
  },

  props: {
    tableData: {
      type: [Array, Object],
      default: () => [],
    },
    header: {
      type: [Array, Object],
      default: () => [],
    },
    footer: {
      type: [Array, Object],
      default: () => [],
    },
    caption: {
      type: String,
      default: '',
    },
    hasCaptionTop: {
      type: Boolean,
      default: false,
    },
    headerInFooter: {
      type: Boolean,
      default: false,
    },
    hideHeader: {
      type: Boolean,
      default: false,
    },
    isBordered: {
      type: Boolean,
      default: false,
    },
    isHoverable: {
      type: Boolean,
      default: false,
    },
    isStriped: {
      type: Boolean,
      default: false,
    },
    isFullwidth: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      container: null,
      containerWidth: 0,
      tableWidth: 0,
      distanceToScroll: 0,
      horizontalScrollPosition: 0,
    }
  },

  computed: {
    overlayClassList () {
      return {
        'table__overlay--left': this.isScrolled,
        'table__overlay--right': this.isFullyScrolled,
      }
    },

    tableClassList () {
      return {
        'table--bordered': this.isBordered,
        'table--hoverable': this.isHoverable,
        'table--striped': this.isStriped,
        'table--fullwidth': this.isFullwidth,
      }
    },

    isScrolled () {
      return this.horizontalScrollPosition > 0
    },

    isFullyScrolled () {
      return this.horizontalScrollPosition < this.distanceToScroll
    },

    headerCells () {
      // check keys in case object is passed
      if (Object.keys(this.header).length) return this.header

      const items = Array.isArray(this.tableData) ? this.tableData : Object.values(this.tableData)
      const headers = items.reduce((acc, item) => {
        return Array.isArray(item) ? acc : acc.concat(Object.keys(item))
      }, [])

      // only return unique values
      return [...new Set(headers)]
    },

    footerCells () {
      // give `this.footer` priority
      if (Object.keys(this.footer).length) return this.footer
      // always return something since we only check for this.footerCells.length
      return this.headerInFooter ? this.headerCells : this.footer
    },
  },

  created () {
    // warn if `tableData` prop or default slot not provided.
    // check keys in case object is passed
    if (!Object.keys(this.tableData).length && !this.$slots.default) {
      console.error(`\`${this.$options.name}\` requires \`tableData\` prop or default slot content`)
    }
  },

  mounted () {
    this.container = this.$el.querySelector('.table__container')
    this.checkForOverflow()

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.checkForOverflow)
      this.container.addEventListener('scroll', this.checkOverflowSide)
    }
  },

  destroyed () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.checkForOverflow)
      this.container.removeEventListener('scroll', this.checkOverflowSide)
    }
  },

  methods: {
    checkForOverflow (e) {
      const table = this.$el.querySelector('.table')

      this.containerWidth = this.container.clientWidth
      this.tableWidth = table.scrollWidth
      this.distanceToScroll = this.tableWidth - this.containerWidth
      this.horizontalScrollPosition = table.scrollLeft
    },

    checkOverflowSide (e) {
      this.horizontalScrollPosition = e.target.scrollLeft
    },
  },
}
</script>

<style lang="scss">
.table {
  &__header {
    border-bottom: border();
    font-weight: font-weight('bold');
    table-layout: auto;
    text-transform: uppercase;
  }

  &__footer {
    border-top: border();
    font-weight: font-weight('bold');
  }

  &__caption {
    @include font-size(6);

    caption-side: bottom;
    color: color('night', 'light');
    font-weight: font-weight('regular');
    text-align: left;

    &--top {
      caption-side: top;
    }
  }

  &__container,
  &__overlay {
    overflow-x: auto;
    position: relative;
  }

  &__overlay--left {
    &::before {
      @include shadow-overlay(to right);
    }
  }

  &__overlay--right {
    &::after {
      @include shadow-overlay(to left);
    }
  }

  // These row variants have been left here because they're dependent on `.table--<variant>`
  &--bordered {
    .table__body {
      .table__row {
        border-top: border();
      }
    }
  }

  &--hoverable {
    .table__body {
      .table__row {
        &:hover,
        &:focus {
          background-color: color('grey', 'light') !important;
        }
      }
    }
  }

  &--striped {
    .table__body {
      .table__row:nth-child(even) {
        background-color: lighten(color('grey', 'lighter'), 3%);
      }
    }
  }

  &--fullwidth {
    min-width: 100%;
  }
}
</style>
