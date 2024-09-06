// var webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  devServer: {
    static: './dist',
  },
		resolve: {
			fallback: {
				crypto: false,
			},
		},
  // plugins: [
  //   new webpack.DefinePlugin({
  //    global: 'window'
  //   })
  // ]
};