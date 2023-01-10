const nodeSass = require('node-sass')
const path = require('path')
const buffer = require('buffer')
module.exports = function (source) {
    console.log('source', source)
   
    const result = nodeSass.renderSync({
        data: source,
        outputStyle: 'expanded'
    })
    return result.css.toString()
}