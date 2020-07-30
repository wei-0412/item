<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbo" :key="item.id">
        <img :src="item[imgname]" alt="" 
        :class="[isfull? 'img-full':'img-nomrmal']">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: "swipe",
  props: ['lunbo', 'imgname' ,'isfull']
}
</script>

<style scoped>
.mint-swipe {
 height: 200px;
 text-align: center;
 overflow: hidden;
}
.mint-swipe .img-full {
  /*如果设置了这个类，则宽高百分百并且居中对齐,true为此类生效*/
  width: 100%;
  height: 100%;
}
.mint-swipe .img-nomrmal {
  /*如果设置了这个类，则高百分百，宽自适应并且居中对齐，
  默认为普通类，此生效*/
  height: 100%;
}
</style>