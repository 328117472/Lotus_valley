import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import test from './components/test.vue'
import user from './components/login/user.vue'
import login from './components/login/login.vue'
import reg from './components/login/reg.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{path: '/user',component: login,
      children: [
        {path: 'login',component: login},
        {path: 'reg',component: reg},]
    }
  ]
})