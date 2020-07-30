<template>
  <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <!--change监听input中value值的改变-->
      <input id="test" class="mui-input-numbox" 
      type="number" value="1" @change="chengeVal" ref="numboxInp" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../lib/mui/js/mui.min.js'

export default {
  name: "numbox",
  props: ['max'],
  methods: {
    chengeVal() {
      const val = this.$refs.numboxInp.value;
      console.log(val)
      // 拿到当前val值，并传给父组件，子组件向父组件传值$emit
      this.$emit("func",parseInt(val))
    }
  },
  watch: {
    max(newval,oldval){
      // console.log(newval) 
      mui('.mui-numbox').numbox().setOption('max',newval)
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