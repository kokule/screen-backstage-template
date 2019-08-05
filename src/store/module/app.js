import backstageRoute from '@/router/backstage_routers'
import {getMenuList} from '@/libs/tool'

export default {
  state: {
    username: '',
    menuList: backstageRoute
  },
  getters: {
    menuList: state => {
      state.menuList.forEach(e => {
        e.children = e.children.filter(v=>v.meta.access)
      })
      return state.menuList
    }
  },
  mutations: {
    setUsername(state, username) {
      state.username = username
    }
  },
  actions: {},
}