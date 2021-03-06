// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import "./assets/font/iconfont.css"
import "animate.css"
import VueResource from 'vue-resource'
import "./assets/js/rem"
import $ from 'jquery'
Vue.config.productionTip = false

Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
