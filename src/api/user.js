import axiox from './axios'
import config from '../config/index'

const baserUrl = process.env.NODE_ENV === 'production' ? config.baseUrl.pro : config.baseUrl.dev

export const login = (params) => {
  return axiox.request({
    url: baserUrl + '/user/login',
    params,
    method: 'post'
  })
}
