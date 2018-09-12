<template>
  <div>
    <BaseHeading level="1">Colors</BaseHeading>
    <p>As a rule, use lots of contrast, and stick to cool colors</p>

    <!-- Primary -->
    <BaseHeading level="2">Primary</BaseHeading>
    <p>This is the primary Spartan palette. It's used mostly in layout.</p>

    <div class="palettes">
      <ColorChip
        v-for="(palette, paletteName) in mainPalettes"
        :heading="paletteName"
        :palette="palette" 
        :key="`preview-${paletteName}`" />
    </div>

    <!-- Secondary -->
    <BaseHeading level="2">Secondary</BaseHeading>
    <p>This is the secondary Spartan palette. It should be used sparingly for accents.</p>
    
    <div class="palettes">
      <ColorChip
        v-for="(palette, paletteName) in accentPalettes"
        :heading="paletteName"
        :palette="palette" 
        :key="`preview-${paletteName}`" />
    </div>
  </div>
</template>

<script>
import { props } from '@/assets/styles/tokens/tokens.raw.json'
import ColorChip from '@/components/docs/ColorChip'
import orderBy from 'lodash.orderby'
import groupBy from 'lodash.groupby'

export default {
  name: 'Color',

  components: {
    ColorChip
  },

  data() {
    return {
      colors: Object.values(props).filter(p => p.category === 'background-color')
    }
  },

  computed: {
    palettes() {
      return this.colors.map(color => {
        color.palette = color.name.split('-').shift()
        return color
      })
    },
    mainPalettes() {
      const order = ['spartan_blue', 'grey', 'night', 'ice']
      const toOrder = this.getPalette('main')

      return order.reduce((ordered, key) => {
        ordered[key] = toOrder[key]
        return ordered
      }, {})
    },
    accentPalettes() {
      return this.getPalette('accent')
    }
  },

  methods: {
    /**
     * Split colors into palettes
     * @param {String} palette Get the primary or secondary palette
     *
     * @returns {Object.<string, Object.<string, string>>}
     */
    getPalette(paletteName) {
      const filtered = this.palettes.filter(c => c.paletteType === paletteName)
      const palette = groupBy(filtered, 'palette')
      return this.orderPalettes(palette)
    },

    /**
     * Orders colours by shade
     * @param {Object.<string, Object.<string, string>>} paletteList Objects to order
     *
     * @returns {Object.<string, Object.<string, string>>}
     */
    orderPalettes(paletteList) {
      const ranks = ['darker', 'dark', 'base', 'light', 'lighter', 'lightest', 'text']
      const getShade = name => name.split('-').pop()
      const ordered = {}

      for (let palette in paletteList) {
        ordered[palette] = orderBy(paletteList[palette], color => {
          // parse color shades to assign ranks. `base` if no shade named.
          const shade = color.name === palette ? 'base' : getShade(color.name)

          return ranks.indexOf(shade)
        })
      }

      return ordered
    }
  }
}
</script>

<style lang="scss" scoped>
.palettes {
  display: inline-flex;
  flex-wrap: wrap;
}
</style>
