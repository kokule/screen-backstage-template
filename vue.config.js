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
    proxy: {
      '/amap': {
        target: 'http://192.168.1.217:30002',
        // pathRewrite: { '^/amap': '' }, //  用/api 代替target里面的地址
        // changeOrigin: true
      }
    },
  }
}