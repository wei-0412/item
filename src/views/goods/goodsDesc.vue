<template>
  <div class="goods-desc-content">
    <h2>{{desc.title}}</h2>
    <hr>
    <div class="content" v-html="desc.content"></div>
  </div>
</template>

<script>
import {request} from "network/request"

export default {
  name: "goodsDesc",
  data() {
    return {
      goodsDescId: this.$route.params.id,
      desc: []
    }
  },
  created() {
    this.getDesc()
  },
  methods: {
    getDesc() {
      request({
        url: '/api/goods/getdesc/' + this.goodsDescId,
        method: 'get'
      }).then( res => {
        this.desc = res.message[0]
        console.log(this.desc)
      })
    }
  },
}
</script>

<!--为了详情图片自使用，去掉scoped-->
<style >
.goods-desc-content {
  padding: 0px 8px;
}
.goods-desc-content h2 {
  color: #226aff;
  text-align: center;
  font-size: 16px;
  margin: 15px 0px;
}
.goods-desc-content hr {
  color: #ccc;
}
.goods-desc-content .content {
  text-align: justify;
}
.goods-desc-content .content img {
  width: 100%;
  height: 100%;
}
</style>