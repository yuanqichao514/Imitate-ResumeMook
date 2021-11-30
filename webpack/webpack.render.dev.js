// 渲染进程开发环境配置

// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const webpackMerge = require('webpack-merge');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const baseConfig = require('./webpack.base');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  mode: 'development',
  entry: {
    // 对应渲染进程的app.jsx入口文件
    index: path.resolve(__dirname, '../app/renderer/app.tsx'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true, // gzip压缩
    host: '127.0.0.1', // webpack-dev-server启动时要指定ip， 不能直接通过localhost启动，不指定会报错
    port: 7001, // 端口号
    hot: true, // 热更新HRM
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 以此文件为模版，自动生成html
      template: path.resolve(__dirname, '../app/renderer/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
      chunks: ['index'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },
};

module.exports = webpackMerge.merge(baseConfig, devConfig)