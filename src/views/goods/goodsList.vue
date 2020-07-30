<template>
  <div class="goods-list">
  
    <router-link class="goods-item"
    :to="'/home/goodsinfo/'+item.id" tag="div"
    v-for="item in goodsList" :key="item.id">
        <img :src="item.img_url" alt="">
        <h1 class="title">{{ item.title }}</h1>
        <div class="info">
            <p class="price">
              <span class="now">￥{{ item.sell_price }}</span>
              <span class="old">￥{{ item.market_price }}</span>
            </p>
            <p class="sell">
              <span>热卖中</span>
              <span>剩{{ item.stock_quantity }}件</span>
            </p>
        </div>
    </router-link>

    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>

  </div>
</template>

<script>
import {request} from "network/request"

export default {
  name: "goodsList",
  data() {
    return {
      // 页码第一页
      page: 1,
      goodsList: []
    }
  },
  created() {
    this.getGoods()
  },
  methods: {
    getGoods() {
      request({
        url: '/api/getgoods?pageindex='+ this.page,
        method: 'get'
      }).then( res => {
        // 合并数组concat(),再把值重新赋给this.goodsList累加起来
        this.goodsList = this.goodsList.concat(res.message)
      })
    },
    getMore() {
      this.page++,
      this.getGoods()
    }
  },
}
</script>

<style scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
}
.goods-item{
  width: 49%;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
  margin: 4px 0;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 293px;
}
.goods-item img{
  width: 100%;
  min-height: 170px;
}
.goods-item .title{
  font-size: 14px;
}
.goods-item .info{
  background-color: #eee;  
}
.goods-item .info p{
  margin: 0;
  padding: 5px;
}
.price .now{
    color: red;
    font-size: bold;
    font-size: 16px;
}
.price .old{
    text-decoration: line-through;
    font-size: 12px;
    margin-left: 10px;
}
.sell{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}

</style>