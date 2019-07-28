import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import test from './components/test.vue'
import login from './components/login/login.vue'

Vue.use(Router)

export default new Router({
mode: 'history',
base: process.env.BASE_URL,
routes: [
  {path: '/test',component: test},
  {path: '/login',component: login},
]
})