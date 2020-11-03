const webpack = require('webpack');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


const Dotenv = require('dotenv-webpack');

// @TODO: do not this lol
const isProduction = true;

// console.log(path.resolve(__dirname, 'src/index.tsx'));

// tslint:disable-next-line:no-default-export
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
    },
    devServer: {
        contentBase: 'dist',
        // inline: true,
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
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 10000,
            cacheGroups: {
                // extractPopupStyles: {
                //     name: 'style',
                //     chunks: chunk => chunk.name === 'popup',
                // },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'resolve-url-loader'],
            },
            {
                test: /\.s(a|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader', 'sass-loader'],
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
            // {
            //     test: require.resolve('@blueprintjs/core'),
            //     loader: 'imports-loader?this=>window,global=>{window: this}',
            // },
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

        // new ReactLoadablePlugin({
        //     filename: './dist/react-lodable.json',
        // }),

        // new WorkboxPlugin.GenerateSW({
        //     clientsClaim: true,
        //     skipWaiting: true,
        // }),

        // new OfflinePlugin({
        //     excludes: ['**/*.js', '*.js']
        // })
    ],
    externals: {
        fs: {},
        path: {},
    },
    // watch: true,
    // node: {
    //     process: false,
    // }
};
