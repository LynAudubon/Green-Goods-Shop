const path = require('path');

module.exports = {
    // entry: [
    //     'regenerator-runtime/runtime.js', "index.js"
    // ],
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'index.bundle.js',
        publicPath: '/',
    },
    devServer: {
        port: 8080,
        compress: true,
        historyApiFallback: true,
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
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    }
};