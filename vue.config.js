module.exports = {
  // publicPath:'./',
  assetsDir:'static',
  configureWebpack: config => {
    require('vux-loader').merge(config, {
      options: {},
      plugins: ['vux-ui']
    })
    // config.module.rules.push({
    //   test : '/\.css$/i',
    //   use :['handlebars-loader','extract-loader','css-loader']
    // })
    console.log(config)
  },
  // 接口请求代理 替换apis为target
  devServer: {
    port:8080,
    proxy: {
      '/apis': {
        target :'http://39.97.33.178/api',
        ws: true,  
        changeOrigin: true, 
        pathRewrite: {
          '^/apis': ''
        }
      },
    }
  }
}