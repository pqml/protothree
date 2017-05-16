const webpack = require('webpack')
const path = require('path')

const config = {
  entry: path.join(__dirname, 'example', 'example.js'),
  output: {
    path: path.join(__dirname, 'example'),
    filename: 'example.bundle.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      components: path.join(__dirname, 'src', 'components'),
      utils: path.join(__dirname, 'src', 'utils'),
      shaders: path.join(__dirname, 'src', 'shaders')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        use: [
          'raw-loader',
          'glslify-loader'
        ]
      }
    ]
  },
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

module.exports = config
