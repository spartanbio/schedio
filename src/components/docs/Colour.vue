<template>
  <div>

    <BaseHeading level="1">Colours</BaseHeading>
    <p>As a rule, use lots of contrast, and stick to cool colours</p>

    <!-- Primary -->
    <BaseHeading level="2">Primary</BaseHeading>
    <p>This is the primary Spartan palette. It's primary purpose is for layout</p>

    <ColourList v-for="colour in getPalette('primary')" :colour="colour" :key="colour.name" />

    <!-- Secondary -->
    <BaseHeading level="2">Secondary</BaseHeading>
    <p>This is the secondary Spartan palette. It should be used sparingly for accents.</p>

    <ColourList v-for="colour in getPalette('secondary')" :colour="colour" :key="colour.name" />

  </div>
</template>

<script>
import { props } from '@/assets/styles/tokens/tokens.raw.json'
import ColourList from '@/components/docs/ColourList'

export default {
  name: 'Colour',

  components: {
    ColourList
  },

  data() {
    return {
      colours: Object.values(props).filter(t => t.category === 'background-color')
    }
  },

  methods: {
    /**
     * Split colours into palettes
     * @param {('primary'|'secondary')} palette Get the primary or secondary palette
     *
     * @returns {[Object.<string, string>]}
     */
    getPalette(palette) {
      const notValid = typeof palette !== 'string' && palette !== ('primary' || 'secondary')

      if (notValid) return

      return Object.values(this.colours).filter(c => c.palette === palette)
    }
  }
}
</script>
