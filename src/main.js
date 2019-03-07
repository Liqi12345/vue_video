import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts' //引入echarts
import axios from '../src/api/utils'
import api from '../src/api/config'

Vue.prototype.echarts = echarts //引入组件
Vue.prototype.axios = axios
Vue.prototype.api = api

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

// import videojs from 'video.js'
//
// import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
// import 'videojs-flash'
//
// Vue.prototype.videojs = videojs


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

if(/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)) {
    Vue.prototype.flag = 'app'
} else {
    Vue.prototype.flag = 'pc'
}