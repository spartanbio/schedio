import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles.scss'
import registerComponentsGlobally from '@/utils/register-components-globally'

Vue.config.productionTip = false

// Automatically register base components
const baseComponents = require.context(
  '@/components/', // path to components
  true, // check subfolders?
  /Base[A-Z]\w+\.(vue|js)$/ // regex file name
)

registerComponentsGlobally(baseComponents)

new Vue({
  render: h => h(App)
}).$mount('#app')
