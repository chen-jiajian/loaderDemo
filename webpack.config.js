const path = require('path')
const FileAnalysis = require('./plugin/fileAnalysis')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolveLoader: {
        alias: {
            'self-sass-loader': path.resolve(__dirname, "loaders/sassloader.js"),
            'clear-log-loader': path.resolve('./loaders/log-loader1'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    "clear-log-loader",
                    path.resolve('./loaders/log-loader2')
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "css-loader",
                    "self-sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new FileAnalysis({name: 'jarvis'})
    ] 
}