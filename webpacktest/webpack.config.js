const path = require('path')

//entry포인트를 추가하거나 변경해도
//plugin이 index.html을 replace해준다(내 bundle들이 추가 되어있는)
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    /*entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }*/
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}