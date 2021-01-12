const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtracttextPlugin = require("extract-text-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: {
    home: ["./src/assets/js/main.js", "./src/assets/scss/main.scss"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/js/[name].bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    host: "127.0.0.1",
    port: "8080"
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: ExtracttextPlugin.extract({
          use:[
            "css-loader",
            "sass-loader",
          ]
        }),
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.(jpe?g|gif|svg|webp)$/i,
        loader: "file-loader"
      },
      {
        test: /\.(ico|png)$/,
        loader: "file-loader?name=[name].[ext]"
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["home"],
      template: "src/index.html",
      filename: "index.html"
    }),

    new ExtracttextPlugin("syle.css"),
  ]
};
