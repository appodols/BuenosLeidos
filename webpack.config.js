/*jshint esversion: 6 */

//
// var path = require("path");
//
// module.exports = {
//   context: __dirname,
//   entry: "./frontend/entry.jsx",
//   output: {
//     path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
//     filename: "bundle.js"
//   },
//   module: {
//     loaders: [
//       {
//         test: [/\.jsx?$/, /\.js?$/],
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['env', 'react']
//         }
//       }
//     ]
//   },
//   devtool: 'source-map',
//   resolve: {
//     extensions: [".js", ".jsx", "*"]
//   }
// };
//


const path = require('path');
const webpack = require('webpack');

let plugins = [];
let devPlugins = [];

let prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  })
];
plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
);

module.exports = {
  context: __dirname,
  entry: "./frontend/entry.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map'
};
