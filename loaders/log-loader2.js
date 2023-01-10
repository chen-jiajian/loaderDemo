
module.exports = function (source) {
    source = source.replace(/debugger/, '')
    console.log('去除debugger');
    return source
}