<template>
  <div class="comment">
    <h2>发表评论{{newsInfoId}}</h2>
    <hr>
    <textarea cols="30" placeholder="请输入要BB的内容（最多吐槽120字）" 
    maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="addCom">发表评论</mt-button>
    <div class="com-cont">
      <div class="com-info">
        <h5>第1楼用户：匿名用户发表时间：2020-07-05 13:42:29</h5>
        <p>哈哈</p>
      </div>
    </div>
    <mt-button type="danger" plain size="large">加载更多</mt-button>
  </div>
</template>

<script>
import {request} from "network/request"
import { Toast } from 'mint-ui'

export default {
  name: "comment",
  props: ['newsInfoId'],
  data () {
    return {
      page: 1,
      commentList: [],
      msg: ''
    }
  },
  created() {
    this.getComments()
  },
  methods: {
    getComments() {
      request({
        // 页面加载数据为null，服务器没有数据返回
        url: '/api/getcomments/'+ this.newsInfoId +'?pageindex='+this.page,
        method: 'get'
      }).then( res => {
        this.commentList = res.message
        console.log(res)
      })
    },
    addCom() {
      // trim()去除字符串的头尾空格
      // 判断用户是否填写了内容
      if (this.msg.trim().length<=0) {
        return Toast('请填写评论内容')
      };
      request({
        url: '/api/postcomment/'+ this.newsInfoId,content: this.msg.trim(),
        method: 'post'
      }).then( res => {
        
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
.comment h2 {
  font-size: 18px;
}
.comment hr {
  color: #ccc;
}
.comment textarea {
  height: 90px;
  font-size: 12px;
  margin-bottom: 5px;
}
.comment .com-cont h5 {
  height: 30px;
  color: #000;
  line-height: 30px;
  padding: 0px 5px;
  background-color: #ccc;
}
.comment .com-cont p {
  color: #000;
  text-indent: 2em;
}
</style>