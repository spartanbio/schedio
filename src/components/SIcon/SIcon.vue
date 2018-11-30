<template>
  <svg :class="classList" class="icon">
    <use v-bind="{'xlink:href': require('feather-icons/dist/feather-sprite.svg') + '#' + icon }"/>
  </svg>
</template>

<script>
import { colors, sizes } from './options.js'
import icons from 'feather-icons/dist/icons.json'
import sprites from 'feather-icons/dist/feather-sprite.svg'

const list = Object.keys(icons)

export default {
  name: 'SIcon',

  props: {
    icon: {
      type: String,
      required: true,
      validator: v => {
        return list.includes(v) || console.error(`\`icon\` must be one of: ${list.join(', ')}`)
      }
    },

    iconColor: {
      type: String,
      default: '',
      validator: value => {
        if (!value || colors.includes(value)) return true

        return console.error(`\`iconColor\` ${value} not found. Allowed colors: ${colors}`)
      }
    },

    iconSize: {
      type: String,
      default: '',
      validator: value => {
        if (!value || sizes.includes(value)) return true

        return console.error(`\`iconSizes\` ${value} not found. Allowed sizes: ${sizes}`)
      }
    }
  },

  data() {
    return {
      iconPath: '',
      sprites
    }
  },

  computed: {
    classList() {
      return [
        this.iconColor ? `icon--color-${this.iconColor}` : '',
        this.iconSize ? `icon--size-${this.iconSize}` : ''
      ]
    }
    // },

    // async mounted() {
    //   await this.getIconSpriteFile()
    // },

    // methods: {
    //   async getIconSpriteFile() {
    //     const { default: spriteFile } = await import('feather-icons/dist/feather-sprite.svg')
    //     this.iconPath = spriteFile
    //   }
  }
}
</script>
