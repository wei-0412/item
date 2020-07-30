import Vue from 'vue'

// 导入全局mint-ui组件
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'
Vue.use(Mint)

// 导入全局mui样式
import "../lib/mui/css/mui.min.css"
// 导入全局mui拓展icon
import "../lib/mui/css/icons-extra.css"

// 导入全局缩略图组件并挂载
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

