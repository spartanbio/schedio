import Vue from 'vue'
import SToast from './SToast.vue'

const SToastProgrammatic = {
  open (params) {
    const vm = typeof window !== 'undefined' && window.Vue ? window.Vue : Vue
    const SToastComponent = vm.extend(SToast)
    const propsData = Object.assign({}, params)

    return new SToastComponent({
      el: document.createElement('div'),
      propsData,
    })
  },
}

export { SToast }

export default {
  install: (Vue) => {
    Vue.prototype.$toast = SToastProgrammatic
  },
}
