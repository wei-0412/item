import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import globalConfig from './common/globalConfig'
// 导入一个全局时间过滤器
import filters from './common/filters'




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
