<template>
  <div>
    <SHeading level="1">
      Print Typography
    </SHeading>
    <p>
      <code>16pt</code> would be a bit large for most print typography, so instead, start with a
      base of <code>{{ baseFontSize }}pt</code>. Increase or decrease this size as the print size requires using the
      calculator below can be used as a guide.
    </p>

    <blockquote>
      <strong>Note:</strong> The calculator below is <em>only</em> for font size. Other than size,
      all other parameters should match those in
      <a
        href="#"
        @click.prevent="linkToComponent"
      >Headings and Displays</a>.
    </blockquote>

    <SHeading level="2">
      Typography Calculator
    </SHeading>

    <form
      style="margin-bottom: 1em;"
      @submit.prevent
    >
      <SFormField>
        <SInput
          id="base-font-size"
          v-model="calcFontSize"
          name="base-font-size"
          label="Base font size (pt)"
        />
      </SFormField>
    </form>

    <!-- Setting the key causes the component to re-render when font size is updated -->
    <STable
      :key="calcFontSize"
      is-bordered
      is-hoverable
    >
      <template v-slot:header>
        <STableRow>
          <th class="table__cell">
            Level
          </th>
          <th class="table__cell">
            Size
          </th>
          <th class="table__cell">
            Leading
          </th>
          <th class="table__cell">
            Tracking
          </th>
          <th class="table__cell">
            example
          </th>
        </STableRow>
      </template>

      <template v-slot:default>
        <STableRow
          v-for="{ name, value } in fontSizes"
          :key="name"
        >
          <STableCell
            style="text-transform: capitalize;"
          >
            {{ name | prettyName }}
          </STableCell>
          <STableCell is-numeric>
            <code>{{ computePrintSize(value) }}</code>
          </STableCell>
          <STableCell is-numeric>
            <code>{{ computeLeading(value) }}</code>
          </STableCell>
          <STableCell is-numeric>
            <code>{{ computeTracking(value) }}</code>
          </STableCell>
          <STableCell>
            <span :style="{ fontSize: computePrintSize(value) }">
              Example text
            </span>
          </STableCell>
        </STableRow>
      </template>
    </STable>
  </div>
</template>

<script>
import { linkTo } from '@storybook/addon-links'
import orderBy from 'lodash.orderby'
import { props } from '@/assets/styles/tokens/dist/tokens.raw.json'

const fontSizes = Object.values(props).filter(
  ({ category, name }) => category === 'font-size' && name !== 'base-font-size'
)

const baseFontSize = 10

export default {
  name: 'TypographyPrint',

  filters: {
    prettyName: val => val.replace(/font-(size)-(\d*)/, '$1 $2')
  },

  data: () => ({
    baseFontSize,
    calcFontSize: baseFontSize,
    fontSizes: orderBy(fontSizes, 'name')
  }),

  methods: {
    computePrintSize(value) {
      return value.replace('rem', '') * this.calcFontSize + 'pt'
    },
    computeLeading(value) {
      const strippedVal = value.replace('rem', '')
      const leading = strippedVal > 3 ? 1.25 : 1.5
      return strippedVal * this.calcFontSize * leading + 'pt'
    },
    computeTracking(value) {
      return value.replace('rem', '') > 3 ? 0.025 : 0
    },
    // forceUpdate() {
    //   this.$nextTick(this.$forceUpdate())
    // },
    linkToComponent: linkTo('Design.Typography', 'Headings & Displays')
  }
}
</script>
