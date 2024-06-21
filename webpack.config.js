const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');
const deps = require('./package.json').dependencies;
module.exports = {
  entry: './src/index',
  mode: 'development',
  target: 'web',
  devServer: {
    port: 3001,
    webSocketServer: false,
    // server: "spdy",
    proxy: {
      "/api": {
        target: "https://www.cnuseful.com",
        changeOrigin: true,
      }
  }
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
