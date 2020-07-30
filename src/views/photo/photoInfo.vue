<template>
  <div class="photo-info">
    <h2>{{ photoInfo.title }}</h2>
    <p>
      <span>发表时间：{{ photoInfo.add_time | timeFormat }}</span>
      <span>点击:{{ photoInfo.click }}次</span>
    </p>
    <hr>

    <!--缩略图thumb-->
    <div class="thumbs">
      <vue-preview class="vue-preview" :slides="thumbs" @close="handleClose"></vue-preview>
    </div>

    <div class="content" v-html="photoInfo.content"></div>

    <!-- 评论区域 -->
    <comment :photoInfoId="photoInfoId"></comment>
  </div>
</template>

<script>
import comment from 'components/comment'
import {request} from "network/request"

export default {
  name: "photoInfo",
  components: {
    comment
  },
  data() {
    return {
      photoInfoId: this.$route.params.id,
      photoInfo: [],
      thumbs: []
    }
  },
  created() {
    this.getimageInfo(),
    this.getThumimg()
  },
  methods: {
    getimageInfo() {
      request({
        url: '/api/getimageInfo/'+this.photoInfoId,
        method: 'get'
      }).then( res => {
        this.photoInfo = res.message[0]
        // console.log(this.photoInfo)
      })
    },
    getThumimg() {
      request({
        url: '/api/getthumimages/'+this.photoInfoId,
        method: 'get'
      }).then( res => {
        if ( res.status==0){
          // 为每一张图片设置宽高
          res.message.forEach( item => {
            item.w = 600
            item.h = 400
            item.msrc = item.src
          })
        }
        this.thumbs = res.message
        // console.log(this.thumbs)
      })
    }
  },
}
</script>

<style lang="less" scoped>
.photo-info {
  width: 100%;
  padding: 0px 10px;
  overflow: hidden;
}
.photo-info h2 {
  color: #26a2ff;
  font-size: 15px;
  text-align: center;
  padding: 10px 0px;
}
.photo-info p {
  display: flex;
  font-size: 13px;
  justify-content: space-between;
}
.photo-info hr {
  color: #ccc;
}
.content {
  font-size: 13px;
  line-height: 30px;
  text-align: justify;
}
.thumbs {
  /deep/ .my-gallery{   //deep深层作用选择器
      display: flex;
      flex-wrap:wrap;//默认换行
      figure{
        width: 30%;
        margin: 5px;
        img{
            width: 100%;
            box-shadow: 0 0 8px #999;
            border-radius: 5px;
      }
    }
  }
}
</style>