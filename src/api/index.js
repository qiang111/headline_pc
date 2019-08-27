import axios from 'axios'
import router from 'vue-router'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

// 响应拦截器
axios.interceptors.response.use(res => res, err => {
  if (err.response.status === 401) {
    router.push('/login')
  }
  return Promise.reject(err)
})
export default axios
