const webpack = require('webpack');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// @ts-ignore false redeclare warning
const path = require('path');
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const Dotenv = require('dotenv-webpack');

// @TODO: do not this lol
const isProduction = (process.env.NODE_ENV || 'development') === 'production';

module.exports = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
    },
    mode: isProduction ? 'production' : 'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [path.resolve('src'), path.resolve('node_modules')],
        // fallback: {
        //     "buffer": require.resolve("buffer"),
        //     "path": require.resolve("path"),
        // },
    },
    devServer: {
        contentBase: 'dist',
        host: 'localhost',
        port: 8080,
        noInfo: true,
        hot: false,
        stats: 'errors-only',
        historyApiFallback: true,
        writeToDisk: false,
    },
    stats: {
        warnings: false,
    },
    optimization: {
        minimize: isProduction,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 10000,
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    }
                },  'resolve-url-loader', {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                    }
                }],
            },
            {
                test: /\.s(a|c)ss$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    }
                 }, {
                    loader: 'resolve-url-loader'
                }, {
                    loader: 'sass-loader',
                options: {
                    sourceMap: true
                } }],
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
                    module: false,
                },
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[hash].[ext]',
                    module: false,
                },
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/img'), to: './img' },
                { from: path.resolve(__dirname, 'src/assets'), to: './assets' },
                { from: path.resolve(__dirname, 'src/assets/icons'), to: './icons' },
            ]
        }),

        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
        }),

        new MiniCssExtractPlugin({ filename: '[name].css' }),

        new Dotenv({
            systemvars: true,
        }),

        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),

        new Serve({ static: path.resolve(__dirname, 'dist'), host: 'localhost', port: 8080 })
    ],
    externals: {
        fs: {},
    },
};
