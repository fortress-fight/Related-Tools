var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: './js/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: path.resolve(__dirname, "node_modules"),
            loader: "babel-loader",
            options: {
                presets: ["es2015"]
            }
        }, {
            test: /\.css$/,
            exclude: path.resolve(__dirname, "node_modules"),
            loaders: [
                'style-loader',
                'css-loader?importLoaders=1&souceMap=true',
                'postcss-loader'
            ]
        }, {
            test: /\.scss$/,
            exclude: path.resolve(__dirname, "node_modules"),
            loaders: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
        }, {
            test: /\.html$/,
            exclude: path.resolve(__dirname, "node_modules"),
            loader: 'html-loader'
        }, {
            test: /\.(jpg|png|gif|sev)$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            loader: 'url-loader?limit=500&name=assets/img-[hash:5].[ext]!image-webpack-loader'
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    require('autoprefixer')({
                        broswers: ['last 2 version'] // autoprefixer的参数
                    })
                ]
            }
        }),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ]
}