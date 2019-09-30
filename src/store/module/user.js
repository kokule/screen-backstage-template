export default {
  state: {
    token: '',
    userInfo: {},
  },
  getters: {},
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {},
}
