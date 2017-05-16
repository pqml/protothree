const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const config = require('./webpack.config.common')

const devConfig = {
  devtool: 'eval',
  devServer: {
    contentBase: path.join(__dirname, 'example'),
    compress: true,
    port: 8080,
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ]
}

module.exports = merge(config, devConfig)
