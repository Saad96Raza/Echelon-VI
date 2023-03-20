

const webpack = require('webpack');

const path = require('path');

const config = require('./webpack.config');

const {merge} = require('webpack-merge');




module.exports = merge(config,{
    mode:"development",
    devtool:'inline-source-map',
     devServer:{
      devMiddleware: {
        writeToDisk: true,
    },
     },
    output: {
      path: path.resolve(__dirname, 'public'),
    }
  });
