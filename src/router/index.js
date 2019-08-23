import Vue from 'vue'

import VueRouter from 'vue-router'

import Login from '@/views/login/index.vue'

import axios from 'axios'
Vue.prototype.$http = axios

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: Login }
  ]
})

export default router
