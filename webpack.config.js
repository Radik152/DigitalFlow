const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader'},
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.js$/, use: 'babel-loader'},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './app/index.html'),
            filename: 'index.html'
        })
    ]
}