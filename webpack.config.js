const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'index.bundle.js'
    },
    devServer: {
        port: 8080,
        compress: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    }
};