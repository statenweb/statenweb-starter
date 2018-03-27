let webpack = require('webpack');
let path = require('path');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: './src/js/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [{
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: true
              }
            }, {
              loader: 'postcss-loader',
              options: {
                sourceMap: 'inline'
              }
            }, {
              loader: 'sass-loader',
              options: {
                outputStyle: 'expanded',
                sourceMap: true
              }
            }],
          }),

      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-runtime'],
          },
        },
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('css/main.css'),
    new WebpackCleanupPlugin(),
    new webpack.ProvidePlugin({
      'jQuery': "jquery",
      'Popper': 'popper.js'
    })

  ],
};