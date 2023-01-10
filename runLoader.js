const {runLoaders} = require('loader-runner')
const fs = require('fs')
const path = require('path')
runLoaders({
    resource: path.join(__dirname, './src/content.txt'),
    loaders: [
        {
            loader: path.join(__dirname, './loaders/raw-loader.js'),
            options: {
                name: 'jarvis'
            }
        }
    ],
    context: {
        minimize: true
    },
    readResource: fs.readFile.bind(fs)
}, function (err, result) {
    err ? console.log(err) : console.log(result);
})