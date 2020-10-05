const path = require('path');
const WebpackImagesResizer = require('webpack-images-resizer');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;

const small = [{
  src: path.resolve(__dirname, 'images'),
  dest: '/images/small',
}];

const medium = [{
  src: path.resolve(__dirname, 'images'),
  dest: '/images/medium',
}];

const large = [{
  src: path.resolve(__dirname, 'images'),
  dest: '/images/large',
}];

module.exports = {
  mode: 'production',
  entry: './entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new WebpackImagesResizer(small, { width: '25%', quality: 70 }),
    new WebpackImagesResizer(medium, { width: '50%', quality: 70 }),
    new WebpackImagesResizer(large, { width: '75%', quality: 70 }),
    new ImageminWebpackPlugin({
      pngquant: ({
        quality: 50,
      }),
    }),
  ],
};
