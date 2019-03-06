<template>
  <!-- eslint-disable vue/no-v-html -->
  <svg
    :class="classList"
    class="icon"
    viewBox="0 0 24 24"
    v-html="featherIcon.contents"
  />
</template>

<script>
import { colors, sizes } from './options.js'
import feather from 'feather-icons'
import icons from 'feather-icons/dist/icons.json'

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

  computed: {
    classList() {
      return [
        this.iconColor ? `icon--color-${this.iconColor}` : '',
        this.iconSize ? `icon--size-${this.iconSize}` : ''
      ]
    },

    featherIcon() {
      return feather.icons[this.icon] || { contents: '' }
    }
  }
}
</script>
