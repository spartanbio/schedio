import Vue from 'vue'

/**
 * Globally register Vue components
 * @param {function} componentFiles Webpack's `require.context()`
 */
export default function registerComponentsGlobally(componentFiles) {
  componentFiles.keys().forEach(fileName => {
    // Get component config
    const componentConfig = componentFiles(fileName)

    // Strip the leading `./` and extension from the filename
    const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')

    // Register component globally
    Vue.component(
      componentName,
      // Look for the component options on `.default`, which will
      // exist if the component was exported with `export default`,
      // otherwise fall back to module's root.
      componentConfig.default || componentConfig
    )
  })
}
