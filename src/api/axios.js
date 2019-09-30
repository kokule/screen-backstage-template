import axios from 'axios'
import router from '../router'
import {getToken, removeToken} from '../libs/utils'

axios.defaults.baseURL = '';
axios.defaults.timeout = 5000;

/**
 * 对请求的操作
 */
axios.interceptors.request.use(config => {
    // 在发送请求前的操作
    const token = getToken();
    if (token) {
      config.headers['my-token'] = token
    }
    return config
  }, (error) => {
    return Promise.error(error)
  }
);

/**
 * 对响应数据操作
 */
axios.interceptors.response.use(response => {
  // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
  // 否则的话抛出错误
  const responseCode = response.status;
  if (responseCode === 200) {
    return Promise.resolve((response))
  } else {
    return Promise.reject(response)
  }
}, error => {
  // 服务器返回不是 2 开头的情况，会进入这个回调
  // 可以根据后端返回的状态码进行不同的操作
  const responseCode = error.response.status;
  switch (responseCode) {
    case 401:
      this.$Message.warning('请先登录');
      this.$router.push({path: '/login'});
      break;
    case 403:
      this.$Message.warning('token已过期');
      // 清除token
      removeToken();
      // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
      setTimeout(() => {
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
      }, 2000);
      break;
    case 404:
      this.$Message.warning('请求地址不存在');
      break;
    // 其他错误统一处理
    default:
      this.$Message.warning(error.response.data.message)
      return Promise.reject(error)
  }
  return Promise.reject(error)
});

export default axios
