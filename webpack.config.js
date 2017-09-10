const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  devServer: {
    contentBase: './dist',
    inline: true,
    host: 'localhost',
    port: 8080,
    noInfo: true,
    hot: true,
    stats: 'errors-only',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: [
          path.resolve(__dirname, 'src')
        ]
      },
      {
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        enforce: 'pre',
        include: [
          path.resolve(__dirname, 'src')
        ]
      },
      {
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader',
        options: {
            name: 'fonts/[hash].[ext]',
            limit: 5000,
            mimetype: 'application/font-woff'
        }
      },
      {
          test: /\.(ttf|eot|svg|png)$/,
          loader: 'file-loader',
          options: {
              name: 'fonts/[hash].[ext]'
          }
      },
      {
          test: /\.(jpg|png)$/,
          loader: 'file-loader',
          options: {
              name: '[path][name].[hash].[ext]'
          }
      },
      {
        test: require.resolve('@blueprintjs/core'),
        loader: 'imports-loader?this=>window,global=>{window: this}'
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourcemap: true
    }),
    new CopyWebpackPlugin([
      { from: './src/index.html', to: './index.html' }
    ])
  ]
};