import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import Vant from "vant"
import axios from './axios'
import "vant/lib/index.css"
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false;
Vue.use(Vant)
Vue.use(Mint)

new Vue({
router,
store,
render: h => h(App)
}).$mount('#app')
