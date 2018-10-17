<template>
  <a href="#" class="link" @click.prevent="navigate(to, story)">{{ text }}</a>
</template>

<script>
import { linkTo } from '@storybook/addon-links'

export default {
  name: 'StoryLink',

  props: {
    to: {
      type: String,
      required: true
    },

    story: {
      type: String,
      default: undefined
    },

    linkText: {
      type: String,
      default: ''
    }
  },

  computed: {
    text() {
      return (this.linkText || this.to.replace(/^.*\/(\w*)/, '$1')).trim()
    }
  },

  mounted() {
    console.log(this.text)
  },

  methods: {
    navigate(kind, story) {
      linkTo(kind, story)()
    }
  }
}
</script>
