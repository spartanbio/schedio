module.exports = theo => {
  theo.registerFormat('color-map.scss', require('./formats/color-map.scss.js'))
  theo.registerFormat('ase.json', require('./formats/ase.json.js'))
}
