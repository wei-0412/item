<template>
  <div id="app">
    <!-- header -->
    <mt-header fixed title="MY-APP商城">
      <span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    
		<!-- 这是内容部分 -->
		<transition>
			<router-view></router-view>
		</transition>

    <!-- 底部bar -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-my" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-my" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-my" to="/shopcart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" id="badge">{{ totality }}</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-my" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      flag: true //默认显示返回按钮
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
      // console.log(this)
    }
  },
  computed: {
  ...mapGetters(['totality'])
  },
  created() {
    this.flag = this.$route.path === "/home" ? false:true
  },
  watch: {
    "$route.path"(newVal,oldVal) {
      if(newVal === "/home") {
        this.flag = false
      }else {
        this.flag = true
      }
    }
  },
}
</script>

<style scoped>
#app {
  padding-top: 40px;
	padding-bottom: 50px;
	overflow: hidden;
}
.v-enter {
  opacity: 0;
  transform: translate(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translate(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

/* 类名冲突--改类名 */
.mui-bar-tab .mui-tab-item-my {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-my .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-my.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-my .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
