const webpackMerge = require('webpack-merge')
const baseCfg = require('./webpack.config.base')
const TerserPlugin = require('terser-webpack-plugin')

const config = {
  mode: 'production',
  stats: { children: false, warning: false },
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
}

module.exports = config
