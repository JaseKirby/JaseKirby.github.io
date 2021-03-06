const merge = require("webpack-merge");
const common = require("./webpack.config");

module.exports = merge(common, {
  entry: {
    vendor: ["react", "react-dom"]
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./" + common.output.path
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          test: "vendor",
          enforce: true
        }
      }
    }
  }
});
