const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.prod.config')
// 根据不同的 ENV 执行不同的 config.js
const config = process.NODE_ENV === 'development' ? devConfig : proConfig

module.exports = merge(baseConfig, config)