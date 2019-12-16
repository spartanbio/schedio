const defaults = {
  // Buttons
  buttonColor: '',
  buttonShade: '',
  buttonType: '',

  // Container
  containerTag: 'div',

  // FileInput
  fileInputHideCount: false,
  fileInputHideIcon: false,
  fileInputIsDroppable: false,
  fileInputText: '',
}

export default defaults
export function setDefaults (options) {
  Object.assign(defaults, options)
}
