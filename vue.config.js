// 注意：配置此文件需要重启

const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  // 部署应用包时的基本 URL
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  // 是否启用elinst
  lintOnSave: false,

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  devServer: {
    host: '0.0.0.0',
    proxy: {
      '/amap': {
        // target: 'http://58.58.162.59:13393',
        target: 'http://58.58.162.59:38913', // 东营港
        // target: 'http://localhost:8085',
        pathRewrite: {'^/3dmap': ''},
        changeOrigin: true
      },
      '/3dmap': {
        // target: 'http://58.58.162.59:13393',
        target: 'http://58.58.162.59:38926', // 东营港
        // target: 'http://localhost:8085',
        pathRewrite: {'^/3dmap': ''},
        changeOrigin: true
      },
    },
  }
}
