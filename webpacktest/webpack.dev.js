const merge = require('webpack-merge')

//공통 환경 요소 import
const common = require('./webpack.common.js')

const webpack = require('webpack')

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        //webpack-dev-server to serve the files from the dist directory on localhost:8080
        contentBase: './dist',
        hot: true //hmr을 사용
    },
    plugins: [
        new webpack.NamedModulesPlugin(),         //to see which dependencies are being patched(on cmd)
        new webpack.HotModuleReplacementPlugin()  //hmr plugin
    ]
})

