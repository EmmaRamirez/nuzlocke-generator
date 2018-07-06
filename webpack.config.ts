const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const OfflinePlugin = require('offline-plugin');

const isProduction = process.env.NODE_ENV === 'production' ? true : false;

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [path.resolve('./src'), path.resolve('./node_modules')],
    },
    devServer: {
        contentBase: './dist',
        inline: true,
        host: 'localhost',
        port: 8080,
        noInfo: true,
        hot: false,
        stats: 'errors-only',
        historyApiFallback: true,
    },
    stats: {
        warnings: false,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.tsx?$/,
                loader: 'tslint-loader',
                enforce: 'pre',
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.styl$/,
                loader: ['style-loader', 'css-loader', 'resolve-url-loader', 'stylus-loader'],
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader', 'resolve-url-loader'],
            },
            {
                test: /\.s(a|c)ss$/,
                loader: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'],
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    name: 'fonts/[hash].[ext]',
                    limit: 5000,
                    mimetype: 'application/font-woff',
                },
            },
            {
                test: /\.(ttf|eot|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[hash].[ext]',
                },
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[hash].[ext]',
                },
            },
            {
                test: require.resolve('@blueprintjs/core'),
                loader: 'imports-loader?this=>window,global=>{window: this}',
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/index.html', to: './index.html' },
            { from: './src/img', to: './img' },
            { from: './src/assets/icons', to: './icons' }
        ]),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'PRODUCTION': JSON.stringify(true)
        }),

        // new OfflinePlugin({
        //     excludes: ['**/*.js', '*.js']
        // })
    ],
    externals: {
        fs: {},
    },
};
