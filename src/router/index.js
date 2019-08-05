import Vue from 'vue'
import VueRouter from 'vue-router'
import backstageRoute from './backstage_routers'
import screenRoute from './screen_routers'

Vue.use(VueRouter)

const routes = [...backstageRoute, ...screenRoute]

const router = new VueRouter({
  routes,
  model: 'history'
})

export default router