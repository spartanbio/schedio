<template>
  <div>
    <SHeading level="1">
      Spacing
    </SHeading>

    <p>
      Consistent spacing allows elements to stand out. It improves scannability and reduces noise.
    </p>

    <p>
      All spacing is defined using the <code>em</code> unit. This ensures spacing is relative to the
      parent element's <code>font-size</code>.
    </p>

    <STable
      is-bordered
      is-hoverable
    >
      <template v-slot:header>
        <STableRow>
          <STableCell>Name</STableCell>
          <STableCell>Value</STableCell>
          <STableCell>Example</STableCell>
        </STableRow>
      </template>

      <STableRow
        v-for="(value, name) in orderedSpacing"
        :key="name"
      >
        <STableCell>
          <code>$spacing-{{ name }}</code>
        </STableCell>

        <STableCell is-numeric>
          <code>{{ value }}</code>
        </STableCell>

        <STableCell class="spacing-example">
          <div
            :style="{height: value, width: value}"
            class="spacing-example__spacer"
          />
        </STableCell>
      </STableRow>
    </STable>
  </div>
</template>

<script>
import * as spacing from '@spartanbio/schedio-tokens/dist/js/module-js/spacing.module'
import orderBy from 'lodash.orderby'

export default {
  name: 'Spacing',

  data () {
    return {
      spacing,
    }
  },

  computed: {
    orderedSpacing () {
      const sizeToNumber = size => Number(size.replace(/r?em/, ''))
      const orderFn = ([, value]) => (typeof value === 'string' ? sizeToNumber(value) : value)
      const spacingMap = Object.entries(this.spacing)

      return Object.fromEntries(orderBy(spacingMap, orderFn))
    },
  },
}
</script>

<style lang="scss" scoped>
.spacing-example__spacer {
  background-color: color('blue');
}
</style>
