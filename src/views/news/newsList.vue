<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h2>{{item.title}}</h2>
            <p class='mui-ellipsis'>
              <span>{{item.add_time | timeFormat}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {request} from "network/request"

export default {
  name: "newsList",
  data () {
    return {
      newsList: []
    }
  },
  created () {
    this.getNewsList()
  },
  methods: {
    getNewsList() {
      request({
      url: 'api/getnewslist',
      method: 'get'
      }).then( res => {
        this.newsList = res.message
      }).catch( err => {
        console.log(err)
      })
    }
  }

}
</script>

<style scoped>
.mui-media-body h2 {
  font-size: 14px;
}
.mui-media-body p {
  font-size: 12px;
  color: #26a2ff;
  display: flex;
  justify-content: space-between;
}
</style>