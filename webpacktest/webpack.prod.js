const merge = require('webpack-merge')

//공통 환경 요소 import
const common = require('./webpack.common.js')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const webpack = require('webpack')

module.exports = merge(common, {
    // useful for debugging as well as running benchmark tests
    // inline-*** and eval-*** use in prod as they can increase bundle size and reduce the overall performance.
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
})

