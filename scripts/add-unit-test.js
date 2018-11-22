const fs = require('fs-extra')
const path = require('path')

const defaultComponentDir = path.resolve(__dirname, '../src/components')

/**
 * Generates a unit test for a Vue component
 * @param {string} fileName - The name of the component
 * @param {string} [componentDir] - The component's parent directory
 *
 * @return {Promise.<string>} The component name
 */
async function addUnitTest(fileName, componentDir = defaultComponentDir) {
  const filePath = path.resolve(componentDir, fileName)
  const stat = await fs.stat(filePath)

  // only run on directories
  if (stat.isDirectory()) {
    const testDir = path.resolve(filePath, '__tests__')

    await fs.ensureDir(testDir)

    const { length: testDirHasFiles } = await fs.readdir(testDir)

    // only run if there are no tests
    if (!testDirHasFiles) {
      const testFile = path.resolve(testDir, `${fileName}.spec.js`)
      const testContents = `import { shallowMount } from '@vue/test-utils'
import ${fileName} from '@/components/${fileName}/${fileName}.vue'

describe('${fileName}.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(${fileName})

    expect(wrapper.html()).toMatchSnapshot()
  })
})\n`

      // write the file
      await fs.outputFile(testFile, testContents)

      return fileName
    }
  }
}

module.exports = addUnitTest
