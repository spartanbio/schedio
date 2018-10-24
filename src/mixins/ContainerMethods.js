import kebabCase from 'lodash.kebabcase'

export default {
  methods: {
    /**
     * Get the $props that should be used to generate responsive class names
     * @param {(string|RegExp)} modifier - Class modifier (i.e.: size, narrow, order, offset)
     * @returns {Object.<string, (number|string|boolean)>}
     */
    getClassNameProps(modifier) {
      const pattern = modifier instanceof RegExp ? modifier : new RegExp(modifier)

      return Object.keys(this.$props).reduce((classes, className) => {
        if (pattern.test(className) && this.$props[className]) {
          const kebabName = kebabCase(className)
          classes[kebabName] = this.$props[className]
        }

        return classes
      }, {})
    },

    /**
     * Generate an array of modifier classes
     * @param {(string|RegExp)} modifier - Class modifier (i.e.: size, narrow, order, offset)
     * @returns {Array.<string>}
     */
    generateResponsiveClassNames(modifier) {
      const classes = this.getClassNameProps(modifier)
      return Object.keys(classes).reduce(this.classNameReducer(classes), [])
    }
  }
}
