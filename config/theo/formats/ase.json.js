const rgbToArray = (input) => {
  // gets the numbers in an rgb formula
  const colorValuesString = /rgb\((.*)\)/.exec(input)[1]
  // splits the string and converts values to percentages
  return colorValuesString.split(',').map(v => v / 255)
}

module.exports = (result) => {
  const { props } = result.toJS()
  const colorProps = props.filter(({ type }) => type === 'color')
  const colors = colorProps.map(({ name, value }) => ({
    name,
    model: 'RGB',
    type: 'global',
    color: rgbToArray(value),
  }))

  return JSON.stringify({ version: '1.0', groups: [], colors }, null, 2)
}
