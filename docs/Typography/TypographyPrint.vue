<template>
  <div>
    <SHeading level="1">
      Print Typography
    </SHeading>
    <p>
      Print typically uses points rather than pixesl to set font size. <code>16pt</code> would be a
      bit large for most print typography, so instead, start with a base of
      <code>{{ baseFontSize }}pt</code>. Increase or decrease this size as the required using the
      calculator below can be used as a guide.
    </p>

    <SHeading level="2">
      Typography Calculator
    </SHeading>

    <p>
      This calculator calculates font size, but the other font parameters should match
      <StoryLink
        to="Design.Typography"
        story="Headings & Displays"
        link-text="Headings & Displays"
      />.
    </p>

    <SFormField style="margin-bottom: 1em;">
      <SInput
        id="base-font-size"
        v-model="calcFontSize"
        name="base-font-size"
        label="Base font size (pt)"
      />
    </SFormField>

    <!--
      Setting the key causes the component to re-render when font size is updated.
      We want that.
    -->
    <STable
      :key="calcFontSize"
      is-bordered
      is-hoverable
    >
      <template v-slot:header>
        <STableRow>
          <STableCell>
            Level
          </STableCell>
          <STableCell>
            Size
          </STableCell>
          <STableCell>
            Leading
          </STableCell>
          <STableCell>
            Tracking
          </STableCell>
          <STableCell>
            Example
          </STableCell>
        </STableRow>
      </template>

      <STableRow
        v-for="(value, name) in fontSizes"
        :key="name"
      >
        <STableCell style="text-transform: capitalize;">
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
          <span
            :id="`example-${value}`"
            :style="{
              fontSize: computePrintSize(value),
              lineHeight: computeLeading(value),
              letterSpacing: computeTracking(value),
            }"
          >
            Example text
          </span>
        </STableCell>
      </STableRow>
    </STable>

    <SHeading level="2">
      Usage guide
    </SHeading>

    <p>
      Each size has a specific use. This table outlines when to use which size.
    </p>

    <STable
      is-bordered
      is-hoverable
    >
      <template v-slot:header>
        <STableRow>
          <STableCell>Size</STableCell>

          <STableCell>Usage</STableCell>
        </STableRow>
      </template>

      <template>
        <STableRow>
          <STableCell>
            Size 1
          </STableCell>

          <STableCell>
            Display 1
          </STableCell>
        </STableRow>

        <STableRow>
          <STableCell>
            Size 2
          </STableCell>

          <STableCell>
            Display 2
          </STableCell>
        </STableRow>

        <STableRow>
          <STableCell>
            Size 3
          </STableCell>

          <STableCell>
            Heading 1
          </STableCell>
        </STableRow>

        <STableRow>
          <STableCell>
            Size 4
          </STableCell>

          <STableCell>
            Heading 2
          </STableCell>
        </STableRow>

        <STableRow>
          <STableCell>
            Size 5
          </STableCell>

          <STableCell>
            Heading 3, Heading 4, labels, body text
          </STableCell>
        </STableRow>

        <STableRow>
          <STableCell>
            Size 6
          </STableCell>
          <STableCell>
            Captions
          </STableCell>
        </STableRow>

        <STableRow>
          <STableCell>
            Size 7
          </STableCell>

          <STableCell>
            Only used at very large sizes.
          </STableCell>
        </STableRow>
      </template>
    </STable>
  </div>
</template>

<script>
import orderBy from 'lodash.orderby'
import * as sizes from '@spartanbio/schedio-tokens/dist/js/module-js/font-size.module'
import StoryLink from '@@/docs/components/StoryLink'

const baseFontSize = 10

export default {
  name: 'TypographyPrint',

  components: {
    StoryLink,
  },

  filters: {
    prettyName: val => val.replace(/font-(size)-(\d*)/, '$1 $2'),
  },

  data () {
    return {
      baseFontSize,
      calcFontSize: baseFontSize,
      fontSizes: Object.fromEntries(orderBy(
        Object.entries(sizes).filter(([name, value]) => !name.includes('base')),
        'name',
      )),
    }
  },

  methods: {
    computePrintSize (value) {
      return value.replace(/(r?em)/, '') * this.calcFontSize + 'pt'
    },
    computeLeading (value) {
      const strippedVal = value.replace(/(r?em)/, '')
      const leading = strippedVal > 3 ? 1.25 : 1.5
      return strippedVal * this.calcFontSize * leading + 'pt'
    },
    computeTracking (value) {
      return (value.replace(/(r?em)/, '') > 3 ? 0.025 : 0) + 'em'
    },
  },
}
</script>
