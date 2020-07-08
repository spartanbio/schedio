import { joinWithConjunction } from './helpers';

/**
 * Logs if deprecated props and what to use instead, if anything.
 * @param {string|string[]} props
 * @param {string} alternative
 */
export function warnPropsDeprecation (props, alternative) {
  const deprStr = 'been deprecated and will be removed in the next major version.';
  const joiner = typeof props === 'string' || props.length === 1 ? 'has' : 'have';
  const altStr = alternative ? `Use \`${alternative}\` instead.` : '';

  if (props && props.length) {
    const propList = props.map(prop => `\`${prop}\``);
    console.error(`${joinWithConjunction(propList)} ${joiner} ${deprStr} ${altStr}`);
  }
}
