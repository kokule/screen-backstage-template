import Main from '../components/backstage-main'

export default [
  {
    path: '/backstage',
    name: 'backstageMain',
    meta:{
      title: '表单页面',
      icon: 'ios-apps'
    },
    component: Main,
    children: [
      {
        path: '/page-one',
        name: 'pageOne',
        meta: {
          icon: '',
          title: 'Table表格',
          access: true
        },
        component: () => import('@/view/backstage/table/table')
      },
      {
        path: '/page-two',
        name: 'pageTwo',
        meta: {
          icon: '',
          title: '页面2',
          access: true
        },
        component: () => import('@/view/backstage/table/table')
      }
    ]
  },
  {
    path: '/backstage-test',
    name: 'backstageTest',
    meta:{
      title: '常用组件',
      icon: 'ios-analytics'
    },
    component: Main,
    children: [
      {
        path: '/page-three',
        name: 'pageThree',
        meta: {
          icon: 'ios-analytics',
          title: '树结构',
          access: true
        },
        component: () => import('@/view/backstage/components/tree')
      }
    ]
  }
]