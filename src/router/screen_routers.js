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
        path: '/test-page1',
        name: 'testPage1',
        meta: {
          title: '测试页面1',
        },
        component: () => import('../view/test/test1')
      },
      {
        path: '/test-page2',
        name: 'testPage2',
        meta: {
          title: '测试页面2',
        },
        component: () => import('../view/test/test2')
      }
    ]
  }
]