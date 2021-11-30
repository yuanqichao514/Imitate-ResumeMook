// 基础公共配置、

// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 配置模块如何解析
  resolve: {
    // 尝试按顺序解析这些后缀名。如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // 创建 import 或 require 的别名，来确保模块引入变得更简单
    alias: {
      // 将 resolve.alias 设置为 false 将告知 webpack 忽略模块。
      // 'ignored-module': false
      '@src': path.join(__dirname, '../', 'app/renderer'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
