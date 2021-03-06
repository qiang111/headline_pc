import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'
// import { nextTick } from 'q'

import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: Login },
    {
      path: '/',
      component: Home,
      children: [
        { path: '/', name: 'welcome', component: Welcome }
      ]
    },
    { path: '*', name: '404', component: NotFound }
  ]
})

// 前置首位
router.beforeEach((to, feom, next) => {
  const user = store.getUser()
  if (to.path !== '/login' && !user.token) return next('/login')
  next()
})

export default router
