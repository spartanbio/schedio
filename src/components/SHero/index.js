import SHero from './SHero.vue'

export { SHero }

export default {
  install: Vue => Vue.component(SHero.name, SHero)
}
