const chalk = require('chalk');
const fs = require('fs-extra');
const kebabCase = require('lodash.kebabcase');
const path = require('path');

const PropTypeMap = new Map([
  [String, { description: 'String value.', type: 'string' }],
  [Boolean, { description: 'Boolean value.', type: 'boolean' }],
  [Number, { description: 'Number value.', type: 'number' }],
  [Array, { description: 'Array value.', type: 'array' }],
  [Object, { description: 'Object value.', type: 'object' }],
  [Function, { description: 'Function value.', type: 'function' }],
  [RegExp, { description: 'RegExp value.', type: 'RegExp' }],
  [Date, { description: 'Date value.', type: 'Date' }],
]);

const componentsDir = path.resolve(__dirname, '../dist/components');
const components = fs.readdirSync(componentsDir);
const dest = path.resolve(__dirname, '../dist/vetur');

// Vetur attributes
const attributes = components.reduce((attributeList, name) => {
  const component = getComponent(name);

  if (!component.props) return attributeList;

  const newAttrs = Object.entries(component.props).reduce((attrs, [propName, prop]) => {
    let details = {};

    if (Array.isArray(prop.type)) {
      const types = prop.type.map(type => PropTypeMap.get(type).type);
      let description = 'One of ';

      if (types.length === 2) {
        description += types.join(' or ');
      } else {
        for (let i = 0; i < types.length; i++) {
          const shouldUseConjunction = i < types.length - 1;
          description += shouldUseConjunction ? `${types[i]}, ` : `or ${types[i]}.`;
        }
      }

      details.description = description;
      details.type = types.join('|');
    } else {
      details = PropTypeMap.get(prop.type);
    }

    const componentProp = kebabCase(name) + '/' + kebabCase(propName);

    return {
      ...attrs,
      [componentProp]: details,
    };
  }, {});

  return { ...attributeList, ...newAttrs };
}, {});

// Vetur tags
const tags = components.reduce((tagList, name) => {
  const component = getComponent(name);

  if (!component.props) return tagList;

  const attributes = Object.keys(component.props).map(attr => kebabCase(attr));
  const subtags = [];
  const componentName = kebabCase(name);
  const description = `Schedio component: <${componentName}>`;
  const details = { attributes, subtags, description };

  return {
    ...tagList,
    [componentName]: details,
  };
}, {});

/**
 * Loads component options
 * @param {String} name The component's name
 */
function getComponent (name) {
  return require(path.resolve(componentsDir, name))[name];
}

/**
 * Writes Vetur helpers for vscode
 * @param {Object} helpers The helpers to write
 */
async function writeVeturHelpers (helpers) {
  console.log(chalk.yellow('Writing vetur helpers...\n'));
  // clear the dierctory
  await fs.emptyDir(dest);
  // write the helpers
  try {
    await Promise.all(Object.entries(helpers).map(writeHelper));

    console.log(chalk.green('Vetur helpers written!\n'));
  } catch (e) {
    console.error(chalk.red(e));
  }
}

/**
 * Write the JSON file
 */
async function writeHelper ([name, helper]) {
  await fs.outputFile(path.resolve(dest, name + '.json'), JSON.stringify(helper, null, 2));
}

// write the helper files
writeVeturHelpers({ attributes, tags });
