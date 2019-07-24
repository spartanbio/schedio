export default class MockFile {
  constructor ({
    name = 'mock.txt',
    size = 1024,
    type = 'text/plain',
    lastModified = 1449505890000,
    lastModifiedDate = new Date(1449505890000),
  } = {}) {
    this.name = name
    this.size = size
    this.type = type
    this.lastModified = lastModified
    this.lastModifiedDate = lastModifiedDate

    const blob = new Blob([this._range(this.size)], { type: this.type })
    blob.lastModifiedDate = new Date()
    blob.name = name

    this.blob = blob
  }

  _range (count) {
    let output = ''

    for (let i = 0; i < count; i++) {
      output += 'a'
    }

    return output
  }
}
