import Vue from 'vue'
import Router from 'vue-router'

import homepage from '@/views/homepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: homepage
    }
  ]
})