<template>
  <div>
    <!-- Primary -->
    <BaseHeading level="1">Colors</BaseHeading>
    <p>As a rule, use lots of contrast, and stick to cool colors</p>

    <template v-for="(palette, paletteName) in mainPalettes">
      <BaseHeading :key="`palette-${paletteName}`" level="2">
        {{ paletteName | underscoreToSpace }}
      </BaseHeading>
      <ColorList v-for="color in palette" :color="color" :key="color.name" />
    </template>

    <!-- Secondary -->
    <BaseHeading level="2">Secondary</BaseHeading>
    <p>This is the secondary Spartan palette. It should be used sparingly for accents.</p>

    <template v-for="(palette, paletteName) in accentPalettes">
      <BaseHeading :key="`palette-${paletteName}`" level="2">
        {{ paletteName | underscoreToSpace }}
      </BaseHeading>
      <ColorList v-for="color in palette" :color="color" :key="color.name" />
    </template>
  </div>
</template>

<script>
import { props } from '@/assets/styles/tokens/tokens.raw.json'
import ColorList from '@/components/docs/ColorList'
import orderBy from 'lodash.orderby'
import groupBy from 'lodash.groupby'

export default {
  name: 'Color',

  components: {
    ColorList
  },

  filters: {
    underscoreToSpace: str => str.replace(/_/g, ' ')
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
      return this.getPalette('main')
    },
    accentPalettes() {
      return this.getPalette('accent')
    }
  },

  mounted() {
    console.log(this.mainPalettes)
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
