const webpackMerge = require('webpack-merge')
const baseCfg = require('./webpack.config.base')

const config = {
  mode: 'development',
  stats: { children: false },
  devtool: 'eval-source-map'
}

module.exports = config
