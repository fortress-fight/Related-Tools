const {
    resolve
} = require('path');
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
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
}