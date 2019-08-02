/* jshint esversion:6 */
import Vue from 'vue';
import Router from 'vue-router';
import index from './components/index/index.vue';
import user from './components/login/user.vue';
import login from './components/login/login.vue';
import reg from './components/login/reg.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      component: index
    },
    {
      path: '/user',
      component: user,
      children: [
        // {path: '/',redirect: login},
        {
          path: 'login',
          component: login
        }
      ]
    },
    {
      path: '/reg',
      component: reg
    }
  ]
});