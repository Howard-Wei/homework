const { resolve } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const config = {
  target: 'node',
  entry: resolve(__dirname, '../src/app.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exlude: [resolve(__dirname, '../node_modules')]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  externals: [
    nodeExternals()
  ],
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: true,
    path: true
  }
}