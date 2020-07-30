import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 把购物车的数据本地存储下来
var cart = window.JSON.parse(localStorage.getItem('cart') || '[]')

export default new Vuex.Store({
  state: {
    cart: cart
  },
  getters: {
    totality(state) {
      let c = 0;
      state.cart.forEach(item => {
          c += item.count
      })
      return c
    }
  },
  mutations: {
    addToCart(state, goods) {
      let flag = false;
      // some方法一旦拿到结果，则终止循环
      state.cart.some( item => {
        if(item.id == goods.id) {
          // 如果找到相同产品，则直接添加数量count
          item.count += goods.count
          flag = true
        }
      })
      // 如果没有找到，直接push到购物车中，也就是一个全新的产品
      if (!flag) {
        state.cart.push(goods)
      }
      // 把购物车的数据本地存储下来
      localStorage.setItem('cart', window.JSON.stringify(state.cart))
    }
  },
  actions: {
  },
  modules: {
  }
})
