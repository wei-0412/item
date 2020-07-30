<template>
  <div class="goods-info">

    <!--<div class="ball" v-show="ballFlag"></div>-->

    <!--轮播区域-->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swipe :lunbo="lunbo" :imgname="'src'"></swipe>
        </div>
      </div>
    </div>

    <!--购买区域-->
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsData.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            市场价：<span style="margin-right: 10px;">
                      <del>￥{{ goodsData.market_price }}</del>
                    </span>
            销售价：<span class="now_price">￥{{ goodsData.sell_price }}</span>
          </p>
          <p>
            购买数量：
            <numbox :max="goodsData.stock_quantity"  @func="addShopCart"></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToCart"> 加入购物车
              </mt-button>
          </p>
        </div>
      </div>
    </div>
		
    <!--参数区域-->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号 ：{{ goodsData.goods_no }}</p>
          <p>库存情况 ：{{ goodsData.stock_quantity }}</p>
          <p>上单时间 ：{{ goodsData.add_time | timeFormat }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goodsDesc">
          图文介绍
        </mt-button>
        <mt-button type="danger" size="large" plain @click="goodsCom">商品评论</mt-button>            
      </div>
    </div>

  </div>
</template>

<script>
import {request} from "network/request"
import swipe from 'components/swipe'
import numbox from 'components/numbox'

export default {
  name: "goodsInfo",
  components: {
    swipe,
    numbox
  },
  data() {
    return {
      goodsInfoId: this.$route.params.id,
      lunbo: [],
      goodsData: {},
      ballFlag: false,
      currentCount: 1 //当前默认为选中数量为1
    }
  },
  created() {
    this.getThumimg()
    this.getGoodsInfo()
  },
  methods: {
    getThumimg() {
      request({
        url: '/api/getthumimages/'+ this.goodsInfoId,
        method: 'get'
      }).then( res => {
        this.lunbo = res.message
      }).catch( err => {
        console.log(err)
      })
    },
    getGoodsInfo() {
      request({
        url: '/api/goods/getinfo/' + this.goodsInfoId,
        method: 'get'
      }).then( res => {
        this.goodsData = res.message[0]
        // console.log(this.goodsData)
      })
    },
    goodsDesc() {
      // 通过编程式导航实现路由跳转
      this.$router.push('/home/goodsdesc/' + this.goodsInfoId)
    },
    goodsCom() {
      this.$router.push('/home/goodscomment/' + this.goodsInfoId)
    },
    addToCart() {
      this.ballFlag =! this.ballFlag;
      this.$store.commit("addToCart", {
        id: this.goodsInfoId,
        count: this.currentCount
      })
    },
    addShopCart(val) {
      // 拿到子组件的val值重新保存到data----currentCount中
      this.currentCount = val
    }
  },
}
</script>

<style scoped>
.goods-info {
  overflow: hidden;
  background-color: #eee;
}

.ball{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  top: 390px;
  left: 150px;
}

.mui-card-content-inner .mint-button--small {
  margin-right: 5px;
}
.now_price{
  color: red;
  font-size: 16px;
  font-weight: bold;
}
.mui-card .mui-card-footer{
  display: block;
}
.mint-button--large {
  margin: 10px 0px;
}
</style>