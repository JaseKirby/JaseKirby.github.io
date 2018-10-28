const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const outputPath = "dist";

module.exports = {
  entry: {
    app: './src/index.tsx',
    vendor: ['react', 'react-dom']
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, outputPath),
    filename: "[name].bundle.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./" + outputPath
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new CleanWebpackPlugin(outputPath),
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      favicon: 'favicon.ico',
      template: 'index.html'
    })
  ]
};
