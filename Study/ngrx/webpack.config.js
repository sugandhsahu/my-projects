const webpack = require('webpack');
module.exports = {
  optimization: {
    runtimeChunk: false
  },
  output: {
    filename: '[name].min.js'
  }
}
