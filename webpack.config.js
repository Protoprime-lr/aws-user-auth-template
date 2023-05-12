/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
  externalsPresets: { node: true },
  entry: slsw.lib.entries,
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  externals: [{ 'aws-sdk': 'commonjs aws-sdk' }],
  module: {
    rules: [
      {
        test: /\.(ts?)$/,
        loader: 'ts-loader',
        exclude: [
          [
            path.resolve(__dirname, '.serverless'),
            path.resolve(__dirname, '.webpack'),
            path.resolve(__dirname, 'node_modules'),
          ],
        ],
      },
    ],
  },
};
