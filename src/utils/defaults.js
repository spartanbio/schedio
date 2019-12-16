const defaults = {
}

export default defaults

export function setDefaults (options) {
  Object.assign(defaults, options)
}
