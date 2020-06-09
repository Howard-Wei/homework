const webpackMerge = require('webpack-merge')
const baseWebpackCfg = require('./webpack.config.base')
module.exports = webpackMerge(baseWebpackCfg, {
  mode: 'development',
  devtool: 'eval-source-map',
  stats: { children: false }
})