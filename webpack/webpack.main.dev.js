// 主进程开发环境配置

// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const baseConfig = require('./webpack.base');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const webpackMerge = require('webpack-merge');

const mainConfig = {
  // 入口文件
  entry: path.resolve(__dirname, '../app/main/electron.ts'),
  // 由于js应用场景增加，从浏览器到Node，运行在不同环境下的js代码存在一些差异
  // target配置项可以让webpack构建出不同运行环境的代码
  target: 'electron-main', // 编译为electron主进程， electron-renderer编译为electron渲染进程
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  mode: 'development',
};

module.exports = webpackMerge.merge(baseConfig, mainConfig); // webpackMerge合并出完整的配置
