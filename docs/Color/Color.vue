<template>
  <div>
    <SHeading level="1">
      Colors
    </SHeading>
    <p>As a rule, use lots of contrast, and stick to cool colors</p>

    <!-- Primary -->
    <SHeading level="2">
      Primary
    </SHeading>
    <p>This is the primary Spartan palette. It's used mostly in layout.</p>

    <ColorList :palette="mainPalettes" />

    <!-- Secondary -->
    <SHeading level="2">
      Secondary
    </SHeading>
    <p>This is the secondary Spartan palette. It should be used sparingly for accents.</p>

    <ColorList :palette="accentPalettes" />
  </div>
</template>

<script>
import ColorList from '../components/ColorList'
import groupBy from 'lodash.groupby'
import orderBy from 'lodash.orderby'
import { props as colors } from '@spartanbio/schedio-tokens/dist/web/raw-json/color.raw.json'

export default {
  name: 'Color',

  components: {
    ColorList,
  },

  data () {
    return {
      colors: Object.values(colors),
    }
  },

  computed: {
    palettes () {
      return this.colors.map((color) => {
        const [, palette] = color.name.split('-')
        color.palette = palette

        return color
      })
    },
    mainPalettes () {
      const order = [
        'blue',
        'grey',
        'night',
        'ice',
        'white',
      ]
      const toOrder = this.getPalette('main')
      return order.reduce((ordered, key) => ({ ...ordered, [key]: toOrder[key] }), {})
    },
    accentPalettes () {
      return this.getPalette('accent')
    },
  },

  methods: {
    /**
     * Split colors into palettes
     * @param {String} paletteType Get the primary or secondary palette
     * @returns {Object.<string, Object.<string, string>>}
     */
    getPalette (paletteType) {
      const filtered = this.palettes.filter(palette => palette.paletteType === paletteType)
      const palette = groupBy(filtered, 'palette')
      return this.orderPalette(palette)
    },

    /**
     * Orders colours by shade
     * @param {Object.<string, Object.<string, string>>} palette Objects to order
     * @returns {Object.<string, Object.<string, string>>}
     */
    orderPalette (palette) {
      const ranks = [
        'darker',
        'dark',
        'base',
        'light',
        'lighter',
        'lightest',
        'text',
      ]
      const colors = Object.keys(palette)
      // base shades do not contain '-'
      const shade = name => (name.match('-') ? name.split('-').pop() : 'base')
      // parse color shades to assign ranks. `base` if no shade named.
      const rank = color => ranks.indexOf(shade(color.name))
      return colors.reduce((pal, color) => ({ ...pal, [color]: orderBy(palette[color], rank) }), {})
    },
  },
}
</script>
