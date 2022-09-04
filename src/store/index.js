
import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage'
const TOKEN_KEY = 'TOUTIAO_TOKEN'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户的数据
    // user: JSON.parse(window.localStorage.getItem(TOKEN_KEY))
    user: getItem(TOKEN_KEY)
  },
  getters: {

  },
  mutations: {
    setUser (state, data) {
      // 设置用户数据
      state.user = data
      //  token存储在本地
      // window.localStorage.setItem(TOKEN_KEY,JSON.stringify(state.user))
      setItem(TOKEN_KEY, state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
