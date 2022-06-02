const path = require('path');
require('dotenv').config();
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.bundle.js',
        // publicPath: '/',
    },
    devServer: {
        port: 9090,
        compress: true,
        historyApiFallback: true,
        // proxy: {
        //     "/api/*": {
        //         target: `http://localhost:${process.env.PORT}`
        //     }
        // }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
		new NodePolyfillPlugin({
			excludeAliases: ["console"]
		}),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
	],
};