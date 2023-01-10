const path = require('path')
const FileAnalysis = require('./plugin/fileAnalysis')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        // rules: [
        //     {
        //         test: /\.js$/,
        //         use: [
        //             path.resolve('./loaders/log-loader1'),
        //             path.resolve('./loaders/log-loader2')
        //         ]
        //     }
        // ]
    },
    plugins: [
        new FileAnalysis({name: 'jarvis'})
    ] 
}