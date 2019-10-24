import Vue from 'vue'
import Router from 'vue-router'
import MovieRouter from './movie'
import CinemaRouter from './cinema'
import MineRouter from './mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // 在api接口之前加上apis 然后在代理中被替换
  base: process.env.BASE_URL,
  routes: [
    MovieRouter,
    CinemaRouter,
    MineRouter,
    {
      path : '/',
      redirect : '/movie'
    },
    {
      path : '/detail',
      component :()=> import('@/components/filmDetails')
    }
  ]
})
