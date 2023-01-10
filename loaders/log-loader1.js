
module.exports = function (source) {
    source = source.replace(/console.*\)/, '')
    console.log('去除console');
    return source
}