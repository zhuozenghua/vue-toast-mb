var path=require('path')
const { VueLoaderPlugin,vueLoaderConfig } = require('vue-loader');

module.exports={
   entry:'./src/lib/index.js',
   output:{
    path:path.resolve("./dist"),
    filename:"vue-toast.js"
   },
   module:{
    rules:[
     {
       test:/\.vue$/,
       loader:'vue-loader',
       exclude: /node_modules/,
       // options: {
       //   loaders:{
       //    scss:'style-loader!css-loader!sass-loader'
       //    // scss:["style-loader", "css-loader", "sass-loader"] 
       //   }
       // }
       options:vueLoaderConfig
     },
     {
       test:/\.js$/,
       loader:'babel-loader',
       exclude: /node_modules/,
       options:{
         presets: ['env'],
       }

      },
      {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
     ]
   },
   plugins: [
        new VueLoaderPlugin(),
    ]

}