import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'  //引入vue-router
import routerConfig from './routeConfig.js'  //引入router的配置项和引入模版
Vue.use(VueRouter);
const router=new VueRouter(routerConfig);
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
