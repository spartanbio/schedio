const defaults = {
  // Buttons
  buttonColor: '',
  buttonShade: '',
  buttonType: '',
}

export default defaults
export function setDefaults (options) {
  Object.assign(defaults, options)
}
