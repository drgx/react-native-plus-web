const path = require('path');
const fs = require('fs');

const appDirectory = path.resolve(__dirname, '../');
const babelLoaderConfiguration = {
  test: /\.js$/,
  // Add every directory that needs to be compiled by Babel during the build
  // Feel free to change this if you want more flexsible can use exlcude instead of exclusive include
  include: [
    path.resolve(__dirname, 'index.web.js'), 
    path.resolve('node_modules/shared'),
    path.resolve('node_modules/react-native-vector-icons')
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      plugins: ['react-native-web', 'syntax-dynamic-import'],
      presets: ['react-native'],
    },
  },
};

// This is needed for webpack to import static images in JavaScript files
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};
const fontLoaderConfiguration = {
  test: /\.ttf$/,
  loader: "url-loader", // or directly file-loader
  include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
}

module.exports = {
  imageLoaderConfiguration,
  babelLoaderConfiguration,
  fontLoaderConfiguration
};