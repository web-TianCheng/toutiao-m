import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import router from './router'
import store from './store'

import 'vant/lib/index.css'
import '@/style/index.less'
import 'amfe-flexible'
import request from '@/utils/request'
// console.log(a)
Vue.use(Vant)
Vue.prototype.$http = request
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
