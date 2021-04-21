const path = require('path');
const pkg = require('./package.json');
const nodeExternals = require('webpack-node-externals');

// This is where we define the Inline magic.
// This loader will turn all .svg, .jpg and .png files
// into something that can be inlined in the final bundle
const fileRules = {
  test: /\.(svg|jpg|png)$/,
  use: [
    {
      loader: "url-loader",
      options: {
        // All files no matter what size
        limit: Infinity,
      },
    },
  ],
};

// Pretty standard babel configurations for modern react apps
const jsRules = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  },
};

module.exports = {
    entry: "./src/index.js",
    mode: "production",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "index.js",
      library: pkg.name,
      libraryTarget: "commonjs2"
    },
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
      library: pkg.name,
      libraryTarget: "umd",
    },
    // module: {
    //   rules: [
    //     {
    //       test: /\.(js|jsx)$/,
    //       exclude: /node_modules/,
    //       include: path.join(__dirname, '/src'),
    //       use: {
    //         loader: "babel-loader"
    //       }
    //     },
    //     {
    //       test: /\.css$/i,
    //       use: ["style-loader", "css-loader"]
    //     },
    //     {
    //       test: /\.(png|jpg|gif)$/i,
    //       use: {
    //         loader: 'url-loader',
    //         options: {
    //           limit: 8192
    //         }
    //       }
    //     }
    //   ]
    // },
    target: 'node',
    externals: [
      "react",
      "react-dom",
      "@material-ui/core",
      "styled-components"
    ],
    module: {
      rules: [jsRules, fileRules],
    }
};