const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = require("./config.json")

const src = path.resolve(__dirname, "src");
const out = path.resolve(__dirname, "debug");

module.exports = (env, argv) => ({
  entry: ["babel-polyfill", src + "/jsx/index.jsx"],
  output: {
    path: out + "/js",
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: ["url-loader?limit=1024"]
      },
      {
        test: /\.(png|jpg|ico)$/,
        use: ["url-loader?limit=8192"]
      },
      {
        test: /\.scss$/,
        use: [
          argv.mode !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
        ]
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ["svg-react-loader"]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      API_URL:JSON.stringify(config[argv.mode].API_URL) 
    }),
    new HtmlWebpackPlugin({
      template: src + "/templates/index.html"
    }),
    new CopyWebpackPlugin([
      { from: 'static/**/*', to: '', flatten: true },
    ]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new FaviconsWebpackPlugin(src + "/img/logo-small.png")
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: { ecma: 8 }
      })
    ]
  },
  devServer: {
    contentBase: out,
    port: 9000,
    historyApiFallback: true
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
});
