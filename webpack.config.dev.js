var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-inline-source-map',
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            title:'React Tic Tac Toe Redux', 
            template: 'index.html', // Load a custom template 
            inject: 'body' // Inject all scripts into the body 
        })
    ],
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loaders: ['style', 'css']
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            }
        ]
    }
};
