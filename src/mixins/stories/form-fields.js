import { boolean, text } from '@storybook/addon-knobs'

/**
 * Factory for Vue props bound to standard HTML attributes
 * @param {Object.<string, string|Boolean>} [param0] - The config object
 * @param {string} [param0.identifier] - A unique for Storybook in case there are multiple component instances being used
 * @param {string} [param0.id] - String to use as the component id
 * @param {string} [param0.name] - String to use as the component name
 * @param {string} [param0.label] - String to use as the component label
 * @param {Boolean} [param0.required] - Is the component required in a form?
 * @param {Boolean} [param0.isInvalid] - Did the compoent pass validation?
 * @return {Object.<string, function>} Props to pass to the component
 */
export const withAttrsAsProps = ({
  identifier = '',
  id = 'id',
  name = 'name',
  label = 'label',
  required = true,
  hideOptional = false,
  isInvalid = false
} = {}) => ({
  id: text(`${identifier} id`.trim(), id, 'Required Props'),
  name: text(`${identifier} name`.trim(), name, 'Required Props'),
  label: text(`${identifier} label`.trim(), label, 'Required Props'),
  required: boolean(`${identifier} required`.trim(), required, 'Optional Props'),
  hideOptional: boolean(`${identifier} hide-optional`.trim(), hideOptional, 'Optional Props'),
  isInvalid: boolean(`${identifier} is-invalid`.trim(), isInvalid, 'Optional Props')
})

/**
 * Factory for bound HTML attributes
 * @param {Object.<string, string|Boolean>} param0 - The config object
 * @param {string} [param0.identifier] - A unique for Storybook in case there are multiple component instances being used
 * @param {string} [param0.value] - The value for the form field
 * @param {Boolean} [param0.disabled] - Is the field disabled?
 * @return {Object.<string, function>} HTML attributes for the component
 */
export const withUnboundAttrs = ({ identifier = '', value = '', disabled = false } = {}) => ({
  value: text(`${identifier} value`.trim(), value, '$attrs'),
  disabled: boolean(`${identifier} disabled`.trim(), disabled, '$attrs')
})
