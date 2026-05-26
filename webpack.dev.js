const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
      },
    ],
    static: './dist',
    watchFiles: ['./src/index.html'],
    hot: true,
    open: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});
