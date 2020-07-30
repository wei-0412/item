// 起别名
module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          'assets': '@/assets',
          'common': '@/common',
          'components': '@/components',
          'network': '@/network',
          'views': '@/views',
        }
      },
    },
    // 百度地图
    // externals: {
    //   "BMap": "BMap"
    // }
  }
  