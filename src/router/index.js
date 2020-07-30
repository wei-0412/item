import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

const homeContent = () => import ("views/tabbars/homeContent")
const memberContent = () => import ("views/tabbars/memberContent")
const shopCartContent = () => import ("views/tabbars/shopCartContent")
const searchContent = () => import ("views/tabbars/searchContent")

const newsList = () => import ("views/news/newsList")
const newsInfo = () => import ("views/news/newsInfo")
const photoList = () => import ("views/photo/photoList")
const photoInfo = () => import ("views/photo/photoInfo")
const goodsList = () => import ("views/goods/goodsList")
const goodsInfo = () => import ("views/goods/goodsInfo")
const goodsDesc = () => import ("views/goods/goodsDesc")
const goodsComment = () => import ("views/goods/goodsComment")

Vue.use(VueRouter)

  const routes = [
    { path: '/', redirect: 'home' },
    { path: '/home', component: homeContent },
    { path: '/member', component: memberContent },
    { path: '/shopcart', component: shopCartContent },
    { path: '/search', component: searchContent },
    { path: '/home/newslist', component: newsList },
    { path: '/home/newsinfo/:id', component: newsInfo },
    { path: '/home/photolist', component: photoList },
    { path: '/home/photoinfo/:id', component: photoInfo },
    { path: '/home/goodslist', component: goodsList },
    { path: '/home/goodsinfo/:id', component: goodsInfo },
    { path: '/home/goodsdesc/:id', component: goodsDesc },
    { path: '/home/goodscomment/:id', component: goodsComment },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'mui-active'
})

export default router
