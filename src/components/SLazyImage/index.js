import SLazyImage from './SLazyImage.vue'

export { SLazyImage }

export default {
  install: Vue => Vue.component(SLazyImage.name, SLazyImage),
}
