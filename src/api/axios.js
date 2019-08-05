import axios from 'axios'
import qs from 'axios'

axios.defaults.baseURL = ''
axios.defaults.timeout = 5000

axios.interceptors.request.use(
  // 在发送请求前做些什么
  config => {
    const token = this.$store.state.token
    if (token) {
      config.headers['my-token'] = token
    }
    // 请求错误的处理
    error => {
      return Promise.error(error)
    }
  }
)

axios.interceptors.response.use(
  res => {
    // 对响应的数据做些什么
    // console.log(res)
    return res
  },
  error => {
    //对响应的错误做些什么
    return Promise.reject(error)
  }
)