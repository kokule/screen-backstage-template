import Main from '../components/backstage-main'

export default [
  {
    path: '/backstage',
    name: 'backstageMain',
    component: Main,
    children: [
      {
        path: '/page-one',
        name: 'pageOne',
        meta: {
          icon: '',
          title: 'Table表格',
          access: false
        },
        component: () => import('@/view/backstage/table/table')
      }
    ]
  }
]