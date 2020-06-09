const baseWebpackCfg = require('./webpack.config.base')
const webpackMerge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = webpackMerge(baseWebpackCfg, {
  mode: 'production',
  // 关闭添加子模块信息、关闭添加警告
  stats: { children: false, warnings: false },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
            // 是否注释console
            drop_console: false,
            dead_code: true,
            drop_debugger: true
          },
          output: {
            comments: false,
            beautify: false
          },
          mangle: true,
        },
        parallel: true,
        sourceMap: false
      })
    ]
  }
})