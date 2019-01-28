import '@/assets/styles.scss'
import * as components from '@/components'
import Vue from 'vue'

const Schedio = {
  install(Vue, options = {}) {
    Object.values(components).forEach(component => Vue.use(component))
  }
}

if (typeof window !== 'undefined' && window.Vue) Vue.use(Schedio)

export default Schedio
