const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  imageLoaderConfiguration,
  babelLoaderConfiguration,
  fontLoaderConfiguration
} = require("./loaderConfiguration");

module.exports = {
  entry: {
    rnwApp: [path.resolve(__dirname, "index.web.js")],
    vendor: ['react','react-dom', 'react-native-web', 'react-router-dom'],
    font: [path.resolve(__dirname, "font.js")],
  },
  module: {
    rules: [babelLoaderConfiguration, imageLoaderConfiguration, fontLoaderConfiguration]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'template.html'),
      title: 'react-native-plus-web',
      filename: 'index.html',
    })
  ],
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: '/',
  },
  resolve: {
    symlinks: false,
    extensions: [".web.js", ".js"],
    modules: [
      path.resolve('node_modules')
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
};
