import path from 'path';

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import defaultWebpackConfig from '@phenomic/plugin-bundler-webpack/lib/webpack.config.js';

module.exports = config => {
  const webpackConfig = defaultWebpackConfig(config);
  return Object.assign({}, webpackConfig, {
    entry: {
      'phenomic.main': [
        process.env.PHENOMIC_ENV !== 'static' &&
          require.resolve('webpack-hot-middleware/client'),
        process.env.PHENOMIC_ENV !== 'static' &&
          require.resolve('react-hot-loader/patch'),
        './App.js'
      ].filter(item => item)
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].[hash].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          //exclude: /node_modules/,
          loader: require.resolve('babel-loader'),
          options: {
            babelrc: false,
            presets: [require.resolve('@phenomic/babel-preset')],
            plugins: [
              require.resolve('react-hot-loader/babel'),
              require.resolve('babel-plugin-react-native-web')
            ]
          }
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: require.resolve('style-loader'),
            use: require.resolve('css-loader')
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'phenomic/[name].[contenthash:8].css',
        disable: process.env.PHENOMIC_ENV !== 'static'
      }),
      process.env.PHENOMIC_ENV !== 'static' &&
        new webpack.HotModuleReplacementPlugin(),
      process.env.NODE_ENV === 'production' &&
        new webpack.optimize.UglifyJsPlugin()
    ].filter(item => item),
    resolve: {
      // react-native(-web) | react-primitives
      extensions: ['.web.js', '.js', '.json']
    },
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
  });
};
