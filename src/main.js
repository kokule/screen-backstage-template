/* eslint-disable no-console */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './index.less'
import router from './router/index'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import moment from 'moment'
import axios from 'axios'
import VueAxios from 'vue-axios'
import config from './config'

Vue.use(iView)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.prototype.moment = moment

Vue.prototype.$axios = axios

Vue.prototype.$config = config


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
