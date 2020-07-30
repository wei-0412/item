<template>
  <div class="news-info">
    <h2>{{ newsList.title }}</h2>
    <p>
      <span>发表时间：{{ newsList.add_time | timeFormat }}</span>
      <span>点击:{{ newsList.click }}次</span>
    </p>
    <hr>
    <div class="content" v-html="newsList.content"></div>
    
    <!-- 评论区域 -->
    <comment :newsInfoId="newsInfoId"></comment>
  </div>
</template>

<script>
import comment from 'components/comment'
import {request} from "network/request"

export default {
  name: "newsInfo",
  components: {
    comment
  },
  data () {
    return {
      // 接收从父元素传过来的id
      newsInfoId: this.$route.params.id,
      newsList: []
    }
  },
  created () {
    this.getNewsInfo()
  },
  methods: {
    getNewsInfo() {
      request({
        url: '/api/getnew/'+ this.newsInfoId,
        method: 'get'
      }).then( res => {
        this.newsList = res.message[0]
      }).catch( err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.news-info {
  width: 100%;
  padding: 0px 10px;
  overflow: hidden;
}
.news-info h2 {
  color: red;
  font-size: 15px;
  text-align: center;
  padding: 10px 0px;
}
.news-info p {
  color: #26a2ff;
  display: flex;
  font-size: 13px;
  justify-content: space-between;
}
.news-info hr {
  color: #ccc;
}
.content {
  text-align: justify;
}
</style>