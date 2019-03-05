<template>
  <div>
    <SHeading level="1">Spacing</SHeading>
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

      <STableRow slot="header">
        <STableCell>Name</STableCell>
        <STableCell>Value</STableCell>
        <STableCell>Example</STableCell>
      </STableRow>

      <STableRow
        v-for="{ name, value } in spacing"
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

export default {
  name: 'Spacing',

  data() {
    return {
      spacing: Object.values(props).filter(p => p.category === 'spacing')
    }
  }
}
</script>

<style lang="scss" scoped>
.spacing-example__spacer {
  background-color: $spartan-blue;
}
</style>
