const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
const HTMLWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

//const OfflinePlugin = require('offline-plugin');

const isProduction = process.env.NODE_ENV === 'production' ? true : false;

console.log(path.resolve(__dirname, 'src/index.tsx'))

// tslint:disable-next-line:no-default-export
module.exports = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [path.resolve('src'), path.resolve('node_modules')],
    },
    devServer: {
        contentBase: 'dist',
        inline: true,
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
        splitChunks: {
            chunks: 'all',
        }
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
                    name: 'assets/[name].[hash].[ext]',
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
            { from: path.resolve(__dirname, 'src/img'), to: './img' },
            { from: path.resolve(__dirname, 'src/assets'), to: './assets' },
            { from: path.resolve(__dirname, 'src/assets/icons'), to: './icons' }
        ]),

        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
        }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'process.env.GH_ACCESS_TOKEN': JSON.stringify(process.env.GH_ACCESS_TOKEN),
            'process.env.ROLLBAR_ACCESS_TOKEN': JSON.stringify(process.env.ROLLBAR_ACCESS_TOKEN),
            'PRODUCTION': JSON.stringify(true),
            'features.themeEditing': JSON.stringify(process.env.THEME_EDITING),
            'features.fileUploads': JSON.stringify(process.env.FILE_UPLOADS),
            'features.multipleNuzlockes': JSON.stringify(process.env.MULTIPLE_NUZLOCKES),
            'features.temTemSupport': JSON.stringify(process.env.TEM_TEM_SUPPORT),
            
        }),

        new ReactLoadablePlugin({
            filename: './dist/react-lodable.json'
        }),

        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true,
        }),

        // new OfflinePlugin({
        //     excludes: ['**/*.js', '*.js']
        // })
    ],
    externals: {
        fs: {},
    },
};
