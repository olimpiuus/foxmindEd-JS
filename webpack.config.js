const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/ts/index.ts',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    client: {
      overlay: {
        errors: true,
        warnings: false,
      }
    },
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          filename: "css/style.css",
        },
        use: [
        "sass-loader"]
      },

      // {
      //   test: /\.(svg|png|jpg|gif)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       esModule: false,
      //       name: "[name].[hash].[ext]",
      //       outputPath: "imgs"
      //     }
      //   }
      // },
    ],
  },
  stats: {
    children: true,
    errorDetails: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  
};