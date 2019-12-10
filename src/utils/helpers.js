/**
 * Joins an array of values with a conjunction
 * @param {array} values The values to join
 * @param {string} [conjunction='and'] What conjunction to use
 * @param {string} [separator=', '] What to separate list values with
 * @example joinWithConjunction(['a', 'b', 'c'], 'or', '; ') => 'a; b; or c'
 * @returns {string} the joined string
 */
export function joinWithConjunction (values, conjunction = 'and', separator = ', ') {
  if (typeof values === 'string' || values.length === 1) return values

  const _values = [...values]
  const last = _values.pop()

  return _values.join(separator) + `${separator}${conjunction} ${last}`
}
