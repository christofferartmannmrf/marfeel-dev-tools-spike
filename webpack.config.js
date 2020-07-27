const { CheckerPlugin } = require('awesome-typescript-loader');
const CopyPlugin = require('copy-webpack-plugin');
const { join } = require('path');
const { optimize } = require('webpack');

let prodPlugins = [];

if (process.env.NODE_ENV === 'production') {
  prodPlugins.push(
    new optimize.AggressiveMergingPlugin(),
    new optimize.OccurrenceOrderPlugin()
  );
}

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'inline-source-map',
  entry: {
    'panel': join(__dirname, 'src', 'panel.ts'),
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader',
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new CheckerPlugin(),
    ...prodPlugins,
    new CopyPlugin({
      patterns: [
        { from: 'src/index.html', to: 'index.html' },
        { from: 'src/index.js', to: 'index.js' },
        { from: 'src/panel.html', to: 'panel.html' },
        { from: 'manifest.json', to: 'manifest.json' }
      ],
    })
  ]
};
