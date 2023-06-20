import path from "path";
import { type Configuration } from "webpack";
import "webpack-dev-server";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: Configuration = {
  mode: "development",
  entry: {
    app: "./src/index.ts",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
    port: 3000,
  },
  module: {
    rules: [
      // parse .ts and .tsx files using ts-loader
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, "src"),
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [new ForkTsCheckerWebpackPlugin(), new HtmlWebpackPlugin()],
};

export default config;
