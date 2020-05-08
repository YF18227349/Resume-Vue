// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import './assets/iconfont/iconfont.css';
import 'font-awesome/css/font-awesome.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import VueJsonp from 'vue-jsonp';
import store from './vuex/index'

Vue.use(VueJsonp)
Vue.use(Vant);
Vue.use(ElementUI)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
