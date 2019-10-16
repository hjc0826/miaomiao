module.exports = {
  configureWebpack: config => {
    require('vux-loader').merge(config, {
      options: {},
      plugins: ['vux-ui']
    })
  },
  // 接口请求代理 替换apis为target
  devServer: {
    port: 8080,
    proxy: {
      '/apis': {
        target: 'http://39.97.33.178/api',
        ws: true,  
        changeOrigin: true, 
        pathRewrite: {
          '^/apis': ''
        }
      },
    }
  }
}