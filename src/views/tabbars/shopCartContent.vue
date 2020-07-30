<template>
  <div class="shopCartContent">
    <div class="goods-list">
        <!-- 商品列表项区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg">
            <div class="info">
                <h1>我是你爷爷</h1>
                <p>
                  <span class="price">￥999</span>
                  <shopNumbox class="numbox"></shopNumbox>
                  <a href="#">删除</a>
                </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner jiesuan">
            <div class="left">
                <p>总计(不含运费)</p>
                <p>已勾选商品 <span class="red">555</span>
                  件， 总价 ￥<span class="red"></span>
                </p>
            </div>
            <mt-button type="danger">去结算</mt-button>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shopNumbox from 'components/shopNumbox'

export default {
  name: "shopCartContent",
  components: {
    shopNumbox
  }
}
</script>

<style lang="less" scoped>
.shopCartContent{
    background-color: #eee;
    overflow: hidden;
    .goods-list{
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }
        img{
            width: 60px;
            height: 60px;
        }
        h1{
            font-size: 13px;
            
        }
        .info{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .price{
                color: red; font-weight: bold;
            }
            .numbox {
              margin: 0px 8px;
            }
        }
    }
    .jiesuan{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .red{
            color: red;
            font-weight: bold;
            font-size: 16px;
        }
    }
}
</style>