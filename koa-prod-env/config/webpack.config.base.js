const { resolve } = require('path')
const nodeExcternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const baseWebpackConfig = {
  // 指明运行环境，node的时候就不会打包fs等node自带的包
  target: 'node',
  entry: {
    server: resolve(__dirname, '../src/index.js')
  },
  output: {
    path: resolve(__dirname, '../dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [resolve(__dirname, '/node_modules')]
      }
    ]
  },
  // 指定无需打包的模块文件， nodeExcternals 提供忽略所有node_modules中的包
  externals: [nodeExcternals()],
  plugins: [
    new CleanWebpackPlugin()
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

module.exports = baseWebpackConfig