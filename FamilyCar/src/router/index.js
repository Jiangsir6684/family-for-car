import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import explain from '@/components/explain'
import calculate from '@/components/calculate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/calculate',
      name: 'calculate',
      component: calculate
    },
    {
      path: '/explain',
      name: 'explain',
      component: explain
    }
  ]
})
