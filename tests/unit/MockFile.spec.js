import MockFile from '../__mocks__/MockFile'
// mock file test harness
describe('Mock file for file upload testing', function() {
  it('should be defined', function() {
    var file = new MockFile()
    expect(file).not.toBeNull()
  })

  it('should have default values', function() {
    var file = new MockFile()
    expect(file.name).toBe('mock.txt')
    expect(file.size).toBe(1024)
  })

  it('should have specific values', function() {
    var size = 1024 * 1024 * 2
    var file = new MockFile({ name: 'pic.jpg', size, type: 'image/jpeg' })
    expect(file.name).toBe('pic.jpg')
    expect(file.size).toBe(size)
    expect(file.type).toBe('image/jpeg')
  })
})
