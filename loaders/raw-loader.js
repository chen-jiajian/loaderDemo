module.exports = function (source) {
    console.log('参数name：', this.query.name);
    const json = JSON.stringify(source).
        replace(/\u2028/g, '\\u2028').
        replace(/\u2029/g, '\\u2029')
    return `export.default ${json}`
}