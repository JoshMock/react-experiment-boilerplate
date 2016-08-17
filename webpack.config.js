const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: 'dist/',
        filename: 'app.min.js',
        pathinfo: true,
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
    ],
    devtool: 'source-map',
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
};
