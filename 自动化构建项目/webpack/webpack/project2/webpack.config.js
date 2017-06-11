 var path = require('path');
 var htmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
    context: '',
    entry: {
        sayHi: './src/js/sayHi.js',
        sayName: './src/js/sayName.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name]bundle.js'
    },
    plugins: [new htmlWebpackPlugin({
        title: 'my project2',
        filename: path.resolve(__dirname, 'dist/index.html'),
        template: 'index.html',
        inject: 'head',
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
    }),new htmlWebpackPlugin({
        title: 'my project2',
        filename: path.resolve(__dirname, 'dist/index2.html'),
        template: 'index.html',
        inject: 'body',
        chunks: ['sayHi']
    })]
}