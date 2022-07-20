const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});module.exports = {mode: 'development',
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
       test: /\.css$/,
       use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"]
  },
 plugins: [htmlPlugin]
};
