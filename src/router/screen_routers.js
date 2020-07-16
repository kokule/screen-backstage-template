import screenMain from '../components/screen-main'

export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'loginPage',
    component: () =>import('../view/login/login')
  },
  {
    path: '/large-screen',
    name: 'largeScree',
    component: screenMain,
    redirect: '/',
    children: [
      {
        path: '/wandering-earth',
        name: 'wanderingEarth',
        meta: {
          title: '流浪地球',
        },
        component: () => import('../view/wandering-earth/index')
      },
      {
        path: '/universe',
        name: 'universeReincarnation',
        meta: {
          title: '宇宙轮回',
        },
        component: () => import('../view/universe/index')
      },
      {
        path: '/cesium',
        name: 'cesium',
        meta: {
          title: 'Cesium',
        },
        component: () => import('../view/cesium/index')
      },
      {
        path: '/pcimap',
        name: 'pciMap',
        meta: {
          title: '佳都地图引擎',
        },
        component: () => import('../view/pcimap/index')
      }
    ]
  }
]
