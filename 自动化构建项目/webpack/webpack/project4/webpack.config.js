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
            template: 'html-loader!./index.html',
            inject: 'body',
            minify: {
                // collapseWhitespace: true,
                // collapseBooleanAttributes: true,
                // removeComments: true,
                // removeEmptyAttributes: true,
                // removeScriptTypeAttributes: true,
                // removeStyleLinkTypeAttributes: true,
                // minifyJS: true,
                // minifyCSS: true
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
                loader: "postcss-loader",
                options: {
                    plugins: function () {
                        return [
                            require('autoprefixer')({
                                broswers: ['last 5 version']
                            })
                        ]
                    }
                }
            }, {
                loader: "sass-loader", // 将 Sass 编译成 CSS
                options: {
                    sourceMap: true
                }
            }],
            exclude: resolve(__dirname, './node_modules'),
        }, {
            test: /\.html$/,
            use: [{
                    loader:  'file-loader',
                    option: {
                        name: '[name]-dist.[ext]',
                    }
                },
                {
                    loader: 'extract - loader',
                }, {
                    loader: 'html-loader'
                }
            ]
        }, {
            test: /\.(jpg|png)$/,
            use: ["file-loader"]
        }]
    }
}