import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage/HomePage'
// import todo from '@/pages/todo'
// import TestVuex from '@/pages/TestVuex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
