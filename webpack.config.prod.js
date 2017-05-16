const merge = require('webpack-merge')
const webpack = require('webpack')
const config = require('./webpack.config.common')

const prodConfig = {
  devtool: false,
  plugins: [
    // Minification and size optimization
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': '"production"' } }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false, screw_ie8: true, drop_console: true },
      output: { comments: false },
      mangle: { screw_ie8: true },
      sourceMap: false
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
}

module.exports = merge(config, prodConfig)
