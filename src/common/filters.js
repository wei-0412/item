import Vue from 'vue'
import moment from 'moment'

// 全局过滤器timeFormat
Vue.filter('timeFormat',function(value,formatStr='YYYY-MM-DD HH:mm:ss'){
  // 必须return一个
  return moment(value).format(formatStr)
})