const groupBy = require('lodash.groupby')

class ColourMap {
  constructor({ props }) {
    const propsWithPalette = props.filter(prop => !!prop.palette)
    this.palettes = groupBy(propsWithPalette, 'palette')
    this.colours = props.filter(prop => prop.type === 'color')
  }

  renderPalette(palette) {
    const props = this.palettes[palette]
    return `'${palette}': (\n${props
      // `    ` formats indent
      .map(prop => `    '${prop.name}': ${prop.value}`)
      .join(',\n')}
  )`
  }

  renderColours() {
    // `  ` formats indent
    return this.colours
      .map(colour => `  '${colour.name}': ${colour.value}`)
      .join(',\n')
  }

  render() {
    return `$palettes: (\n  ${Object.keys(this.palettes)
      .map(palettes => this.renderPalette(palettes))
      // `\n  ` formats indent
      .join(',\n  ')}
);

$colours: (\n${this.renderColours()}\n);`
  }
}

module.exports = function(result) {
  const colourMap = new ColourMap(result.toJS())
  return colourMap.render()
}
