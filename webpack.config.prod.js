var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'test'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                BABEL_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
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
                test: /\.js$/,
                loader: 'babel',
                include: path.join(__dirname, 'src')
            }
        ]
    }
};
