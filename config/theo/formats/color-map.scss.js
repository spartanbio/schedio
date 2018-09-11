const groupBy = require('lodash.groupby')

class ColorMap {
  constructor({ props }) {
    const propsWithPalette = props.filter(prop => !!prop.palette)
    this.palettes = groupBy(propsWithPalette, 'palette')
    this.colors = props.filter(prop => prop.type === 'color')
  }

  renderPalette(palette) {
    const props = this.palettes[palette]
    return `'${palette}': (\n${props
      // `    ` formats indent
      .map(prop => `    '${prop.name}': ${prop.value}`)
      .join(',\n')}
  )`
  }

  renderColors() {
    // `  ` formats indent
    return this.colors.map(color => `  '${color.name}': ${color.value}`).join(',\n')
  }

  render() {
    return `$palettes: (\n  ${Object.keys(this.palettes)
      .map(palettes => this.renderPalette(palettes))
      // `\n  ` formats indent
      .join(',\n  ')}
);

$colors: (\n${this.renderColors()}\n);`
  }
}

module.exports = function(result) {
  const colorMap = new ColorMap(result.toJS())
  return colorMap.render()
}
