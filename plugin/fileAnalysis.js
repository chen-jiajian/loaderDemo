const path = require('path')
const fsPromise = require('fs/promises')
const fs = require('fs')
module.exports = class Analysis {
    fileStr;
    constructor (options) {
        this.options = options
        this.analysis()
    }
    apply () {
        console.log('apply', this.options)
    }
    filePath () {
        return path.join(__dirname, '../src/file/index.html')
    }
    async analysis () {
        const fileUrl = this.filePath()
        if (!fs.existsSync(fileUrl)) return '不存在需要解析的文件'
        try {
            // 读取文件
            const fileData = await fsPromise.readFile(fileUrl, {})
            // 转码
            const htmlFileStr = fileData.toString('utf-8')
            // 匹配file标签
            let fileEle = htmlFileStr.match(/<file[a-zA-Z0-9\.\-="\/ ><]+/g)[0]
            // 匹配成功
            if (fileEle) {
                const srcStr = fileEle.match(/src="[a-zA-Z0-9\.\/]*"/)[0] // src="xxx"
                // 得到src里文件路径
                const src = srcStr.replace('src=', '').replace(/"/g, '') 
                // 绝对路径
                const srcPath = path.join(path.dirname(this.filePath()),src)
                if (fs.existsSync(srcPath)) {
                    // 读取文件
                    const data = await fsPromise.readFile(srcPath, {})
                    // 转码
                    const fileStr = data.toString('utf-8')
                    const newHtmlFileStr = htmlFileStr.replace(/<file[a-zA-Z0-9\.\-="\/ ><]+/g, fileStr)
                    try {
                        await fsPromise.writeFile(path.join(path.dirname(this.filePath()),'newIndex.html'), newHtmlFileStr, {})
                    } catch (err) {
                        console.log('写入失败', err)
                    }
                }
            }
        } catch (err) {
            if (err) {
                console.log('err', err)
            }
        }
        
    }
}