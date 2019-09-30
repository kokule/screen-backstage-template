import axiox from './axios'

export const login = (params) => {
  return axiox.request({
    url: '/amap/user/login',
    params,
    method: 'post'
  })
}
