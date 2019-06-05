<template>
  <div>
    <SHeading level="1">
      Spacing
    </SHeading>
    <p>Consistent spacing allows elements to stand out. It improves scannability and reduces noise.</p>
    <p>
      All spacing is defined using the
      <code>em</code> unit. This ensures spacing is relative to the parent element's
      <code>font-size</code>.
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
        v-for="{ name, value } in orderedSpacing"
        :key="name"
      >
        <STableCell>
          <code>${{ name }}</code>
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
import { props } from '@/assets/styles/tokens/dist/tokens.raw.json'
import orderBy from 'lodash.orderby'
export default {
  name: 'Spacing',

  data() {
    return {
      spacing: Object.values(props).filter(p => p.category === 'spacing')
    }
  },

  computed: {
    orderedSpacing() {
      const sizeToNumber = size => Number(size.replace('em', ''))
      const orderFn = ({ value }) => (typeof value === 'string' ? sizeToNumber(value) : value)

      return orderBy(this.spacing, orderFn)
    }
  }
}
</script>

<style lang="scss" scoped>
.spacing-example__spacer {
  background-color: $spartan-blue;
}
</style>
