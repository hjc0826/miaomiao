import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import * as filters from './filters'
import './assets/css/common.css'
import './assets/css/iconfont.css'
import { Row, Col } from 'vant'
import axios from 'axios'


Vue.use(Row).use(Col);

Vue.prototype.$axios = axios

// 注册为全局过滤器 
Object.keys(filters).forEach(key => Vue.filter(key,filters[key]))


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
