import axios from 'axios'
import qs from 'qs'
import router from '@/router/index'

let base = 'http://test.funanvvv.cn:8088'
if (window.location.href.indexOf('localhost') != -1 || window.location.href.indexOf('192.168.20.62') != -1) {
  base = 'http://localhost:8088';
}
axios.defaults.timeout = 20000

axios.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token')
  if (token) {
    config.headers.userToken = token
    return config
  }
  return config
}, (err) => {
  return Promise.reject(err)
})

axios.interceptors.response.use((res) => {
  if(res.data.code == 2) {
    router.push({
      path: '/login'
    })
  }
  return res
}, (err) => {
  if (err.response) {
    return
  }
  return Promise.reject(err)
})



//获取验证码
export const getVerifyCode = param => {
  return axios.post(`${base}/sms/verify?phoneNumber=${param}`).then(res => res.data)
}
//校验验证码
export const checkVerifyCode = param => {
  return axios.post(`${base}/check/verify`, param).then(res => res.data)
}