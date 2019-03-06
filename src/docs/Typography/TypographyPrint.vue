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

    <form>
      <SInput
        id="base-font-size"
        v-model="baseFontSize"
        :value="baseFontSize"
        name="base-font-size"
        label="Base font size (pt)"
      />
    </form>

    <table class="table table--bordered table--hoverable">
      <thead>
        <tr>
          <th class="table__cell" />
          <th class="table__cell">
            Size
          </th>
          <th class="table__cell">
            Leading
          </th>
          <th class="table__cell">
            Tracking
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ name, value } in fontSizes"
          :key="name"
        >
          <td
            class="table__cell"
            style="text-transform: capitalize;"
          >
            {{ name | prettyName }}
          </td>
          <td class="table__cell table__cell--numeric">
            <code>{{ computePrintSize(value) }}</code>
          </td>
          <td class="table__cell table__cell--numeric">
            <code>{{ computeLeading(value) }}</code>
          </td>
          <td class="table__cell table__cell--numeric">
            <code>{{ computeTracking(value) }}</code>
          </td>
          <td class="table__cell">
            <span :style="{ fontSize: computePrintSize(value) }">
              Example text
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { linkTo } from '@storybook/addon-links'
import orderBy from 'lodash.orderby'
import { props } from '@/assets/styles/tokens/dist/tokens.raw.json'

const fontSizes = Object.values(props).filter(
  ({ category, name }) => category === 'font-size' && name !== 'base-font-size'
)

export default {
  name: 'TypographyPrint',

  filters: {
    prettyName: val => val.replace(/font-(size)-(\d*)/, '$1 $2')
  },

  data: () => ({
    baseFontSize: 11,
    fontSizes: orderBy(fontSizes, 'name')
  }),

  methods: {
    computePrintSize(value) {
      return value.replace('rem', '') * this.baseFontSize + 'pt'
    },
    computeLeading(value) {
      const strippedVal = value.replace('rem', '')
      const leading = strippedVal > 3 ? 1.25 : 1.5
      return strippedVal * this.baseFontSize * leading + 'pt'
    },
    computeTracking(value) {
      return value.replace('rem', '') > 3 ? 0.025 : 0
    },

    linkToComponent: linkTo('Design.Typography', 'Headings & Displays')
  }
}
</script>
