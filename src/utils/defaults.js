const defaults = {
  // Buttons
  buttonColor: '',
  buttonShade: '',
  buttonType: '',

  // Chip
  chipColor: '',

  // Container
  containerTag: 'div',

  // FileInput
  fileInputHideCount: false,
  fileInputHideIcon: false,
  fileInputIsDroppable: false,
  fileInputText: '',

  // Hero
  heroHeight: '',

  // Link
  linkComponent: 'router-link',

  // Progress Bar
  progressBarColor: '',
  progressBarMessage: '',

  // Spinner
  spinnerColor: '',
  spinnerSize: '',
}

export default defaults
export function setDefaults (options) {
  Object.assign(defaults, options)
}
