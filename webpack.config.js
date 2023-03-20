

const webpack = require('webpack');

const path = require('path');

const copyWebpackPlugin = require("copy-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");


const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const TerserPlugin = require("terser-webpack-plugin");





const IS_DEVEOPMENT = process.env.NODE_ENV === "Dev"


const dirApp = path.join(__dirname,'app')
const dirAssets = path.join(__dirname,'assets')
const dirStyles = path.join(__dirname,'styles')
const dirImages = path.join(__dirname,'images')
const dirNode = 'node_modules'




module.exports = {
    entry:[

    path.join(dirApp,'index.js'),
    path.join(dirStyles,'style.scss'),

    ],
    resolve:{

      modules:[

        dirApp,
        dirAssets,
        dirStyles,
        dirImages,
        dirNode,

      ]

      },




    plugins:[

      new webpack.DefinePlugin({
        IS_DEVEOPMENT
      }),

      new copyWebpackPlugin({

        patterns:[

          {
            from: './assets',
            to:'',
            noErrorOnMissing: true
          }

        ]

      }),

      new MiniCssExtractPlugin({

       filename:'[name].css',
       chunkFilename:'[id].css'

      }),




      new ImageMinimizerPlugin({

        minimizer:{

          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {

            plugins:[

              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],

            ],

          },

        },

      }),




      new CleanWebpackPlugin()


   ],


  module: {


        rules: [

          {
            test:/\.js$/, use:{loader:'babel-loader'}
          },

          {
            test:/\.s[ac]ss$/i,use:[
          {
            loader: MiniCssExtractPlugin.loader,
            options:{
              publicPath:''
            }
          },

          {
            loader: "css-loader",
          },

          {
            loader: "sass-loader",
          },

          {
            loader: "postcss-loader",
          },

          ],

          },

          {
            test: /\.(png|jpe?g|svg|gif|webp)$/i,
            loader:'file-loader',
            options:{
              name(file){
                  return '[hash].[ext]'
              }
            }
          },

          {
             test:/\.pug$/,use:['pug-loader']
          },


          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
              {
                loader: ImageMinimizerPlugin.loader,
              },
            ],
          },

          {

            test: /\.(glsl|vs|fs|vert|frag)$/,
            exclude: /node_modules/,
            use: [
              'raw-loader',
              'glslify-loader'
            ]
          },



        ],


      },

      optimization:{
        minimize: true,
        minimizer: [new TerserPlugin()],
      },


  };
