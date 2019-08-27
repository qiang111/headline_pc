// 提供存储信息的函数  提供获取用户信息的函数  提供删除用户信息的安函数
const KEY = 'hm-toutiao-79-user'
export default {
  setUser (user) {
    const jsonStr = JSON.stringify(user)
    window.sessionStorage.setItem(KEY, jsonStr)
  },
  getUser () {
    const jsonStr = window.sessionStorage.getItem(KEY) || '{}'
    return JSON.parse(jsonStr)
  },
  delUser () {
    window.sessionStorage.removeItem(KEY)
  }
}
