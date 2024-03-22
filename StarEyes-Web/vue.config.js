module.exports = {
    // 基本路径 baseURL已经过时
    publicPath: './', 
    // 输出文件目录
    outputDir: 'dist',
    // 输出代码目录
    assetsDir: 'static',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    // compiler: false,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => {
        
            // use show markdown file
            config.module
              .rule('md')
              .test(/\.md$/)
              .use('html-loader')
              .loader('html-loader')
              .end()
              .use('markdown-loader')
              .loader('markdown-loader')
              .end();
        
    },
    configureWebpack: () => {
        return {
            // provide the app's title in webpack's name field, so that
            // it can be accessed in index.html to inject the correct title.
            name: 'title',
            resolve: {
                alias: {
                    '@': resolve('src')
                }
            },
            optimization: {
                minimizer: [
                  new UglifyJsPlugin({
                    uglifyOptions: {
                      // 删除注释
                      output: {
                        comments: false
                      },
                      // 删除console debugger 删除警告
                      compress: {       
                        drop_console: true, // console
                        drop_debugger: false,
                        pure_funcs: ['console.log']// 移除console
                      },
                      warnings: false
                    }
                  })
                ]
              }
        }
    },
    // vue-loader 配置项
    // https://vue-loader.vuejs.org/en/options.html
    // vueLoader: {},
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        //  modules: false
        //  modules过时了，用下面代替
        // 启用 CSS modules for all css / pre-processor files.
        requireModuleExtension: true
    },
    // // use thread-loader for babel & TS in production build
    // // enabled by default if the machine has more than 1 cores
    // parallel: require('os').cpus().length > 1,
    // // 是否启用dll
    // // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
    // // dll: false,
    // // PWA 插件相关配置
    // // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    // pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        // open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        // disableHostCheck: true,
        // host: 'www.test.com',//如果是真机测试，就使用这个IP
        proxy: {
            //  代理地址
            ['']: {
                // target: 'http://iot-dev.iot.sedt.com/',
                target: 'http://iot-dev.seciiuat.shanghai-electric.com/',
                changeOrigin: true,
                pathRewrite: {
                    // ['^' + process.env.VUE_APP_BASE_API ]: ''
                    ['']: ''
                }
            }
        },
        port: 9898	//	端口号自己定义
        // https: false,
        // hotOnly: false,
        // before: app => {}
    },
    // 第三方插件配置
    pluginOptions: {
     // ...
    },
    chainWebpack(config) {
      config.plugins.delete('preload'); // TODO: need test
      config.plugins.delete('prefetch'); // TODO: need test
  
      // set svg-sprite-loader
      config.module
        .rule('svg')
        .exclude.add(resolve('src/icons'))
        .end();
      config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('src/icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
        .end();
  
      // set preserveWhitespace
      config.module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          options.compilerOptions.preserveWhitespace = true;
          return options;
        })
        .end();
  
      config
      // https://webpack.js.org/configuration/devtool/#development
        .when(true,
          // config => config.devtool('cheap-source-map')
          //  完整代码映射
          config => config.devtool('source-map')
        );
  
      config
        .when(true,
          config => {
            config
              .plugin('ScriptExtHtmlWebpackPlugin')
              .after('html')
              .use('script-ext-html-webpack-plugin', [{
              // `runtime` must same as runtimeChunk name. default is `runtime`
                inline: /runtime\..*\.js$/
              }])
              .end();
            config
              .optimization.splitChunks({
                chunks: 'all',
                cacheGroups: {
                  libs: {
                    name: 'chunk-libs',
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: 'initial' // only package third parties that are initially dependent
                  },
                  elementUI: {
                    name: 'chunk-elementUI', // split elementUI into a single package
                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                  },
                  commons: {
                    name: 'chunk-commons',
                    test: resolve('src/components'), // can customize your rules
                    minChunks: 3, //  minimum common number
                    priority: 5,
                    reuseExistingChunk: true
                  }
                }
              });
            config.optimization.runtimeChunk('single');
          }
        );
    }
}
