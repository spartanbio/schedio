const addUnitTest = require('./add-unit-test');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');

const workingDir = path.resolve(__dirname, '../src/components');

const generateTests = (files) => {
  const testsToGenerate = files.map(fileName => addUnitTest(fileName));
  return Promise.all(testsToGenerate);
};

const logGeneratedTests = (successfulFiles) => {
  console.log(chalk.green('Successfully generated tests for:'));

  successfulFiles.forEach((file) => {
    if (typeof file === 'string') console.log(chalk.green(`  - ${file}`));
  });
};

fs.readdir(workingDir)
  .then(generateTests)
  .then(logGeneratedTests)
  .catch(err => console.log(chalk.red(err)));
