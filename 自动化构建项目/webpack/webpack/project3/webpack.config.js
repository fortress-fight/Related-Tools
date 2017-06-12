const { resolve } = require('path');
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
        new extractTextPlugin (resolve(__dirname, 'dist/css/style.css'))
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: extractTextPlugin.extract({
                use: 'css-loader'
            })
        }]
    }
}