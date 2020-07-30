<template>
  <div class="photoList">
    <div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<span 
						:class="['mui-control-item',item.id==0 ? 'mui-active': ''] "  
						v-for="item in categoryList" :key="item.id"
						@click="getImg(item.id)">
						{{item.title}}
					</span>
				</div>
			</div>
		</div>
		<!--图片列表-->
		<ul class="">
			<router-link :to="'/home/photoinfo/'+item.id" tag="li"
			v-for="item in getImgList" :key="item.id">
				<img v-lazy="item.img_url">
				<div class="info">
			  	<h1 class="info-title">{{ item.title }}</h1>
			  	<p class="info-body">{{ item.zhaiyao }}</p>
		  	</div>
			</router-link>
		</ul>
	</div>
	
</template>

<script>
import {request} from 'network/request'
// 导入MUI----js文件
import mui from '../../lib/mui/js/mui.min'

export default {
  name: "photoList",
	data() {
		return {
			categoryList: [],
			getImgList: [],
		}
	},
  mounted() {
    // 当此钩子函数执行的时候,我们才可以进行控件或插件的初始化工作
    //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    mui('.mui-scroll-wrapper').scroll({ deceleration: 0.0005 })
  },
	created() {
		this.getPhotoCategory(),
		this.getImg(0)
	},
	methods: {
		getPhotoCategory() {
			request({
				url: '/api/getimgcategory',
				method: 'get'
			}).then( res => {
				if(res.status==0) {
					// 注意：从后台接口中返回的分类数据，不包含“全部”分类，
					// 需要前端程序员向 message 数组中，
					// 使用 unshift 方法手动添加对象
					res.message.unshift({title:'全部',id:0})
					this.categoryList = res.message
					// console.log(this.categoryList)
				}
			})
		},
		getImg(id) {
			request({
				url: '/api/getimages/'+id,
				method: 'get'
			}).then( res => {
				if(res.status==0) {
					this.getImgList = res.message
					// console.log(this.getImgList)
				}
			})
		}
	},
}
</script>

<style scoped>

* {
  touch-action: pan-x;
}
.photoList ul {
	margin: 0px;
	padding: 10px;
	padding-top: 0px;
	padding-bottom: 0;
}
.photoList ul li {
	list-style: none;
	text-align: center;
	margin-bottom: 10px;
	overflow: hidden;
	background-color: #ccc;
	box-shadow: 0 0 9px #999;
	position: relative;
}
.photoList ul li img {
	width: 100%;
	vertical-align: middle;	
}
.photoList ul li img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}

.photoList ul li .info{
		color: white;
		padding: 5px;
		padding-bottom: 0px;
		text-align: left;
		position: absolute;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.4);
		max-height: 88px;
}
.photoList ul li h1 {
	font-size: 13px;
}
.photoList ul li p{
		font-size: 14px;
		color: white;
}
</style>