const path = require('path')

//entry포인트를 추가하거나 변경해도
//plugin이 index.html을 replace해준다(내 bundle들이 추가 되어있는)
const HtmlWebpackPlugin = require('html-webpack-plugin')

//webpack-dev-server provides you with a simple web server and the ability to use live reloading
const webpack = require('webpack')

module.exports = {
    /*entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }*/
    entry: {
        /*app: './src/index.js',
        print: './src/print.js'*/
        app: './src/index.js' //print.js가 index.js 모듈로 포함된다
    },
    devtool: 'inline-source-map',
    devServer: {
        //webpack-dev-server to serve the files from the dist directory on localhost:8080
        contentBase: './dist',
        hot: true //hmr을 사용
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.NamedModulesPlugin(),         //to see which dependencies are being patched(on cmd)
        new webpack.HotModuleReplacementPlugin()  //hmr plugin
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
    
}