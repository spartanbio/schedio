const defaults = {
  // Buttons
  buttonColor: '',
  buttonShade: '',
  buttonType: '',

  // Container
  containerTag: 'div',
}

export default defaults
export function setDefaults (options) {
  Object.assign(defaults, options)
}
