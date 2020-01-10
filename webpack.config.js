const path = require('path');
const webpack = require('webpack');
const nodeFlag = require('node-flag');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FileManagerPlugin = require('filemanager-webpack-plugin');
const DeclarationFilesPlugin = require("@ahrakio/witty-webpack-declaration-files");

const DEBUG = nodeFlag.get('mode') !== 'production';

const config = {
  entry: {
    'hall-plan': './src/main.ts',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  output: {
    library: {
      amd: 'hall-plan',
      commonjs: 'hall-plan',
      root: 'HallPlan',
    },
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename: `[name]${DEBUG ? '' : '.min'}.js`,
    path: path.join(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/].*\.jsx?$/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader',
      },
      // Support for *.css files. Returns file content as string.
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          // Interprets @import and @url() and resolves them.
          {
            loader: 'css-loader',
            options: {
              // how many loaders before css-loader should be
              // applied to @imported resources
              importLoaders: /*1*/0,
              sourceMap: true,
            },
          },
          // Required packages: postcss-loader
          //{ loader: 'postcss-loader', options: { sourceMap: true } }
        ],
      },
      // Support for *.scss files. Returns file content as string.
      {
        test: /\.s[ca]ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          // Interprets @import and @url() and resolves them.
          {
            loader: 'css-loader',
            options: {
              // how many loaders before css-loader should be
              // applied to @imported resources
              importLoaders: 1,
            },
          },
          // A loader for Webpack for compiling SCSS/Sass files.
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          // Required packages: postcss-loader
          //{ loader: 'postcss-loader', options: { sourceMap: true } }
        ],
      },
      // File loader for supporting images, for example, in CSS files.
      {
        test: /\.(jpg|png|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name]-[hash].[ext]',
            limit: 4096,
            outputPath: '../images/generated/'
          },
        }],
      },
      // File loader for supporting fonts, for example, in CSS files.
      {
        test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name]-[hash].[ext]',
            limit: 4096,
            outputPath: '../fonts/'
          }
        }],
      },
    ],
  },
  plugins: [
    new DeclarationFilesPlugin({
      merge: true,
      exclude: ['helpers'],
    }),
    new MiniCssExtractPlugin({
      filename: `./hall-plan${DEBUG ? '' : '.min'}.css`,
      chunkFilename: `./[name]${DEBUG ? '' : '.min'}.css`,
    }),
    new FileManagerPlugin({
      onEnd: {
        copy: [{
          source: './dist/*.*',
          destination: './demo/',
        }],
        delete: ['./demo/index.d.ts'],
      },
    }),
  ],
};

if (DEBUG) {
  module.exports = {
    ...config,
    mode: 'development',
    devtool: 'source-map',
    plugins: [
      ...config.plugins,
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
    devServer: {
      contentBase: [
        path.join(__dirname, 'demo'),
      ],
      // host: 'localhost',
      port: 80,
      // open: true,
    },
  };
} else {
  module.exports = {
    ...config,
    mode: 'production',
    devtool: 'source-map',
    optimization: {
      ...config.optimization,
      minimizer: [
        new TerserPlugin({
          sourceMap: true,
          extractComments: 'all',
          terserOptions: {
            mangle: true,
            ie8: false,
            warnings: false,
          },
        }),
      ]
    },
    plugins: [
      ...config.plugins,
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
  };
}
