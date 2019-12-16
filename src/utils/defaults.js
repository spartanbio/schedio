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
}

export default defaults
export function setDefaults (options) {
  Object.assign(defaults, options)
}
