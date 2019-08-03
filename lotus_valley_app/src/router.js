/* jshint esversion:6 */
import Vue from 'vue';
import Router from 'vue-router';
import index from './components/index/index.vue';//首页
import user from './components/login/user.vue';//用户页面
import login from './components/login/login.vue';//登陆页面
import reg from './components/login/reg.vue';//注册页面
import a from './components/login/a.vue';//注册页面

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {path: '/',component: index},
    {path: '/user',component:user,
    children: [
        // {path: 'user',redirect: login},
        {path: 'login',component: login},
        {path:"reg",component:reg},
        {path:"a",component:a},
          
        
      ]
    },
    
    // {
    //   path: '/reg',
    //   component: reg
    // }
  ]
});