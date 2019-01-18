// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
import VueAwesomeSwiper from "vue-awesome-swiper"
import "swiper/dist/css/swiper.css"
import Header from './components/Header'
import Tabbar from "./components/Tabbar"
import "./mock/mockServer"
import back from "../src/utils/back";
import axios from '../src/utils/axios'
import store from '../src/store/index'
import '../src/styles/common.css'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$back = back

Vue.component("Header",Header)
Vue.component("Tabbar", Tabbar);

Vue.use(MintUI);
Vue.use(VueAwesomeSwiper);Vue.use(back)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
