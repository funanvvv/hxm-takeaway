import axios from 'axios'
import router from '@/router/index'

let base = 'http://test.funanvvv.cn:8088'
if (window.location.href.indexOf('localhost') != -1 || window.location.href.indexOf('192.168.0.106') != -1) {
  base = 'http://localhost:8088';
}
axios.defaults.timeout = 20000

axios.interceptors.request.use((config) => {
  let token 
  try {
    token = document.cookie.split("token")[1].split("=")[1]
  } catch(e) {
    token = null
  }
  if (token) {
    config.headers.token = token
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
  return Promise.resolve(res)
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
  return axios.post(`${base}/sms/check`, param).then(res => res.data)
}
//testToken
export const test = param => {
  return axios.post(`${base}/sms/test`, param).then(res => res.data)
}
export const getShop = () => {
  return axios.get(`${base}/shop/getList`).then(res => res.data)
}