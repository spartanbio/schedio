<template>
  <img
    ref="lazyElement"
    :src="imageToLoad"
    :srcset="deferredSrcset"
    :sizes="deferredSizes"
    class="lazy-image"
    :class="{
      'lazy-image--loading': !isLoaded,
    }"
    :style="implicitPlaceholder"
    @load="handleLoad"
  >
</template>

<script>
export default {
  name: 'SLazyImage',

  props: {
    src: {
      type: String,
      required: true,
    },

    placeholder: {
      type: String,
      default: '',
    },

    intersectionOptions: {
      type: Object,
      default: () => ({}),
    },

    placeholderHeight: {
      type: String,
      default: '100%',
    },

    width: {
      type: String,
      default: '100%',
    },
  },

  data () {
    return {
      observer: null,
      isIntersecting: false,
      isLoaded: false,
      usePadding: true,
    }
  },

  computed: {
    canLoad () {
      // skip lazy loading if `IntersectionObserver` not supported
      return !('IntersectionObserver' in window) || this.isIntersecting
    },

    implicitPlaceholder () {
      // prevents reflow while image is loading
      const shouldUsePadding = this.usePadding || !this.hasContent

      return {
        // padding handles when image is `display: inline`
        paddingTop: shouldUsePadding ? this.placeholderHeight : null,
        paddingLeft: shouldUsePadding ? this.width : null,
        width: this.hasContent ? this.width : 0,
      }
    },

    hasContent () {
      return !!this.isLoaded || !!this.placeholder
    },

    imageToLoad () {
      return this.deferUntilIntersection(this.src, this.placeholder)
    },

    deferredSrcset () {
      return this.deferUntilIntersection(this.$attrs.srcset)
    },

    deferredSizes () {
      return this.deferUntilIntersection(this.$attrs.sizes)
    },
  },

  mounted () {
    this.createObserver(this.$refs.lazyElement)
  },

  destroyed () {
    this.observer.disconnect()
  },

  methods: {
    handleLoad (event) {
      // using padding at first ensures content does not reflow
      this.usePadding = false
      // tell vm to de-blur the loaded image
      if (this.canLoad) this.isLoaded = true
    },

    deferUntilIntersection (prop, preIntersection = null) {
      return this.canLoad && prop ? prop : preIntersection
    },

    createObserver (el) {
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver(this.onIntersection, this.intersectionOptions)
        this.observer.observe(el)
      }
    },

    onIntersection (entries, observer) {
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
          // tell the image to load and stop observing
          this.isIntersecting = isIntersecting
          observer.unobserve(target)
        }
      })
    },
  },
}
</script>

<style lang="scss">
.lazy-image {
  transition: filter duration() easing('out'), -webkit-filter duration() easing('out');

  &--loading {
    background-color: color('grey', 'light');
    filter: blur(5px);

    // this is needed so Safari keeps sharp edges
    transform: scale(1);
  }
}
</style>
