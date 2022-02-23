const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: './app/index.js',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        // open: true,
        // compress: true,
        // hot: true,
        port: 8080,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },
            // { test: /\.svg$/, use: 'svg-inline-loader'},
            { 
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']},
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'},
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './app/index.html'),
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
    ]
}