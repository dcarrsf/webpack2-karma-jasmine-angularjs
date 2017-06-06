const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Start at the context path
  context: path.resolve(__dirname, '../src'),
  // Entry point...
  entry: {
    app: './app.js',
  },
  // Output endpoint (production)
  output: {
    path: path.resolve(__dirname, '../build/prod/js'),
    filename: '[name].bundle.min.js',
  },
  // Run tasks with loaders...
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },{
        // Transpile ES6
        test: /\.js$/,
        use: ['babel-loader'],
      },{
        // Transpile SASS
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: 'css-loader!sass-loader',
        }),
      },
    ],
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoEmitOnErrorsPlugin(),
    // Extract CSS to separate file
    new ExtractTextPlugin({
      filename: '[name].bundle.min.css',
      allChunks: true,
    }),
    // Generate the index.html file
    new HtmlWebpackPlugin({
      title: 'Webpack build example',
      template: '../src/app.ejs',
      filename: '../index.html'
    }),
  ],
};
