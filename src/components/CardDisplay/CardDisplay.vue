<template>
  <component :is="tag" class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header"/>
    </div>

    <img
      v-if="image && image.src"
      v-bind="image"
      class="card-image">

    <div v-if="$slots.default" :class="{ 'card-body--no-padding': hasNoPadding }" class="card-body">
      <slot/>
    </div>

    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"/>
    </div>
  </component>
</template>

<script>
const imageValidator = obj => {
  const requiredAttrs = ['src', 'alt']

  return requiredAttrs.every(attr => {
    const hasAttr = obj.hasOwnProperty(attr)

    if (!hasAttr) console.error(`\`image\` requires attribute: ${attr}`)

    return hasAttr
  })
}

export default {
  name: 'CardDisplay',

  props: {
    tag: {
      type: String,
      default: 'div'
    },

    image: {
      type: Object,
      default: () => ({ src: '', alt: '' }),
      validator: imageValidator
    },

    hasNoPadding: {
      type: Boolean,
      default: false
    }
  }
}
</script>
