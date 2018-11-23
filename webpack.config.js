// package
const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');
const	CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
const distpath = path.join(__dirname,'dist');
module.exports = {
  context: __dirname,
  mode: "development",
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
    },
  },
  entry: {
    app: './src/app',
    vender: [
      'react',
      'react-router-dom',
    ],
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: distpath,
    publicPath: './',
  },
  module: {
    rules: [{
      test: /(\.less|\.css)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader', 'less-loader'],
      }),
      // use: ['css-loader', 'postcss-loader', 'less-loader'],
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader'],
    }, {
      test: /\.(js|jsx)$/,
      exclude: /(node_module|bower_components)/,
      loader: 'babel-loader',
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader'],
    }],
  },
  plugins: [
    new CleanWebpackPlugin([distpath]),
    new ExtractTextPlugin({
      filename: 'index.[hash].css',
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new HtmlWebpackPlugin({
      title: '记事本',
      template: './index.html',
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vender',
          chunks: 'initial',
          minChunks: 2,
        },
      },
    },
  },
};