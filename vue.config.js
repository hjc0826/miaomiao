const path = require('path')

module.exports = {
  // publicPath:'./',
  assetsDir:'static',
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
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

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/imports.styl'),
      ],
    })
}