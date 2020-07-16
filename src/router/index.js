import Vue from 'vue'
import VueRouter from 'vue-router'
import backstageRoute from './backstage_routers'
import screenRoute from './screen_routers'
import {getToken} from '../libs/utils'
import iView from 'iview'

Vue.use(VueRouter);

const routes = [...backstageRoute, ...screenRoute];

const router = new VueRouter({
  routes,
  model: 'history'
})

const loginName = 'loginPage';

// router.beforeEach((to, from, next) => {
//   iView.LoadingBar.start();
//   const token = getToken();
//   if (!token && to.name === loginName) { // 未登录且要跳转的页面是登录页,直接跳转
//     next()
//   } else if (!token && to.name !== loginName) { // 未登录且要跳转的页面不是登录页,返回登录页面
//     iView.Modal.warning({
//       onOk: function () {
//         next({name: loginName})
//       },
//       title: '错误',
//       content: '登录信息不存在或已过期,请重新登录！'
//     })
//   } else if (token && to.name === loginName) { // 已登录且要跳转的页面上是登录页,转接到首页
//     next({name: 'wanderingEarth'})
//   } else { // 已登录且跳转的不是登录页,正常跳转
//     next()
//   }
// });

router.afterEach(() => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0)
});

export default router
