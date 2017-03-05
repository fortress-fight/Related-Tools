var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: './js/[chunkhash]bundle.js',
        // publicPath: 'http://cdn.com/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, "node_modules")
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'head',
            title: '这个是通过plugin配合模板打包进去的',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ]
}