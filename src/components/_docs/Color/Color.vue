<template>
  <StoryContainer>
    <BaseHeading level="1">Colors</BaseHeading>
    <p>As a rule, use lots of contrast, and stick to cool colors</p>

    <!-- Primary -->
    <BaseHeading level="2">Primary</BaseHeading>
    <p>This is the primary Spartan palette. It's used mostly in layout.</p>

    <ColorList :palette="mainPalettes" />

    <!-- Secondary -->
    <BaseHeading level="2">Secondary</BaseHeading>
    <p>This is the secondary Spartan palette. It should be used sparingly for accents.</p>

    <ColorList :palette="accentPalettes" />
  </StoryContainer>
</template>

<script>
import ColorList from './ColorList'
import groupBy from 'lodash.groupby'
import orderBy from 'lodash.orderby'
import { props } from '@/assets/styles/tokens/dist/tokens.raw.json'
import StoryContainer from '@/components/_docs/StoryContainer'

export default {
  name: 'Color',

  components: {
    StoryContainer,
    ColorList
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
      const order = ['spartan_blue', 'grey', 'night', 'ice', 'white']
      const toOrder = this.getPalette('main')
      return order.reduce((ordered, key) => ({ ...ordered, [key]: toOrder[key] }), {})
    },
    accentPalettes() {
      return this.getPalette('accent')
    }
  },

  methods: {
    /**
     * Split colors into palettes
     * @param {String} paletteType Get the primary or secondary palette
     * @returns {Object.<string, Object.<string, string>>}
     */
    getPalette(paletteType) {
      const filtered = this.palettes.filter(palette => palette.paletteType === paletteType)
      const palette = groupBy(filtered, 'palette')
      return this.orderPalette(palette)
    },

    /**
     * Orders colours by shade
     * @param {Object.<string, Object.<string, string>>} palette Objects to order
     * @returns {Object.<string, Object.<string, string>>}
     */
    orderPalette(palette) {
      const ranks = ['darker', 'dark', 'base', 'light', 'lighter', 'lightest', 'text']
      const colors = Object.keys(palette)
      // base shades do not contain '-'
      const shade = name => (name.match('-') ? name.split('-').pop() : 'base')
      // parse color shades to assign ranks. `base` if no shade named.
      const rank = color => ranks.indexOf(shade(color.name))
      return colors.reduce((pal, color) => ({ ...pal, [color]: orderBy(palette[color], rank) }), {})
    }
  }
}
</script>
