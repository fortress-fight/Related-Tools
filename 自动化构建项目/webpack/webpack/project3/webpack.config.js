const {
    resolve
} = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    context: '',
    entry: './src/app.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: './js/bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'my project',
            filename: resolve(__dirname, 'dist/index.html'),
            template: 'index.html',
            inject: 'body',
            minify: {
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                minifyJS: true,
                minifyCSS: true
            }
        }),
    ],
    module: {
        rules: [{
            test: /\.css$|\.scss$|\.sass$/,
            use: [{
                loader: "style-loader" // 将 JS 字符串生成为 style 节点
            }, {
                loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
            }, {
                loader: "sass-loader", // 将 Sass 编译成 CSS
                options: {
                    outputStyle: 'compressed',
                    sourceMap: true
                }
            }],
            exclude: resolve(__dirname, './node_modules'),
        }]
    }
}