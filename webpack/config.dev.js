const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Start at the context path
  context: path.resolve(__dirname, '../src'),
  // Entry point...
  entry: {
    app: './app.js',
    vendor: ['angular']
  },
  // Output endpoint (production)
  output: {
    path: path.resolve(__dirname, '../build/dev/js'),
    filename: '[name].bundle.js',
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
        use: [
          'babel-loader',
        ],
      },{
        // Transpile SASS
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader?sourceMap'
        ]
      }
    ],
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoEmitOnErrorsPlugin(),
    // Split angular to vendor file
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.bundle.js"
    }),
    // Generate the index.html file
    new HtmlWebpackPlugin({
      title: 'Webpack build example',
      template: '../src/app.ejs',
      filename: '../index.html'
    }),
  ],
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
  // Needed for angular-router
  node: {
    fs: "empty"
  }
};
