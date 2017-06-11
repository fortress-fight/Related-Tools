var webpack = require('webpack');
var path = require('path'),
    htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: '',
    entry: [
        'webpack-dev-server/client?http://localhost:8080', //资源服务器地址
        'webpack/hot/only-dev-server',
        './src/app.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        // 开启服务器的模块热替换(HMR)

        contentBase: path.resolve(__dirname, 'dist'),
        // 输出文件的路径

        publicPath: '/'
        // 和上文 output 的“publicPath”值保持一致
    },
    plugins: [new htmlWebpackPlugin({
            title: 'my project',
            filename: path.resolve(__dirname, 'dist/index.html'),
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
        }), new webpack.HotModuleReplacementPlugin(),
        // 开启全局的模块热替换(HMR)

        new webpack.NamedModulesPlugin(),
        // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
    ]
}