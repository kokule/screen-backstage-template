import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './index.less'
import router from './router/index'
import iView from 'iview'
  import 'iview/dist/styles/iview.css'
import moment from 'moment'
import config from './config'

Vue.use(iView)

Vue.config.productionTip = false

Vue.prototype.moment = moment

Vue.prototype.$config = config

Vue.prototype.$store = store


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
