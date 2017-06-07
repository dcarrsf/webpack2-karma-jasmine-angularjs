var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS'/*, 'Chrome', 'Firefox'*/ ],
    singleRun: true,
    frameworks: [ 'jasmine' ],
    files: [
      './node_modules/angular/angular.min.js',
      './node_modules/angular-mocks/angular-mocks.js',
      'karma.webpack.js'
    ],
    preprocessors: {
      'karma.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader' },
          { test: /\.(sass|scss)$/, loader: 'style-loader!css-loader!resolve-url-loader!sass-loader?sourceMap' }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    },
    reporters: [ 'spec' ]
  });
};
