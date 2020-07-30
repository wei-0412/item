<template>
   <div class="mui-numbox" data-numbox-min='1' data-numbox-step='1' style="height:25px;">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" 
              value="1" @change="chengeVal" ref="numboxInp"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../lib/mui/js/mui.min.js'

export default {
  name: "numbox",
  methods: {
    chengeVal() {
      const val = this.$refs.numboxInp.value;
    }
  },
  mounted() {
      // 初始化数字选择框组件
      mui(".mui-numbox").numbox();
  },
}
</script>

<style scoped>

</style>