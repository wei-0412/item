<template>
  <div class="homeContent">

    <!-- 轮播 -->
    <swipe :lunbo="lunbo" :imgname="'img'" :isfull="true"></swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="~assets/img/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="~assets/img/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="~assets/img/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="~assets/img/menu4.png" alt="">
        <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="~assets/img/menu5.png" alt="">
        <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="~assets/img/menu6.png" alt="">
        <div class="mui-media-body">联系我们</div></a></li>
    </ul>

  </div>
</template>

<script>
import {request} from "network/request"
import swipe from 'components/swipe'

export default {
  name: "homeContent",
  components: {
    swipe
  },
  data () {
    return {
      lunbo: []
    }
  },
  created () {
    this.getLunbo()
  },
  methods: {
    // 请求轮播图数据
    getLunbo() {
      request({
      url: "api/getlunbo",
      method: "get"
      }).then( res => {
        this.lunbo = res.message
      }).catch( err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.mui-grid-view.mui-grid-9 {
  background: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
  padding: 5px 15px;
}
.mui-grid-view.mui-grid-9 .mui-media img {
  width: 60px;
  height: 60px;
}
.mui-grid-view.mui-grid-9 .mui-media div {
  font-size: 13px;
}
</style>