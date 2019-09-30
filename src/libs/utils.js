import Cookie from 'js-cookie'
import store from '../store'

export const setToken = (token) => {
  store.commit('setToken', token)
  return Cookie.set('my-token', token)
}

export const getToken = () => {
  return Cookie.get('my-token')
}


export const removeToken = () => {
  store.commit('setToken', '')
  return Cookie.remove('my-token')
}
