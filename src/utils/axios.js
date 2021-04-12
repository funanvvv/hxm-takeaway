import axios from 'axios'
import router from '@/router/index'
import { Toast } from 'vant'

// const base = 'http://test.funanvvv.cn:8088'
const base = 'http://localhost:8088';
// if (window.location.href.indexOf('localhost') != -1 || window.location.href.indexOf('192.168.0.106') != -1) {
//   base = 'http://localhost:8088';
// }
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
    Toast.fail('请先登录')
    router.push({
      path: '/login'
    })
  }
  return Promise.resolve(res)
}, (err) => {
  router.push({
    path: '/error'
  })
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
export const getUser = param => {
  return axios.get(`${base}/user/getUser/?tel=${param}`).then(res => res.data)
}
export const getShop = param => {
  return axios.get(`${base}/shop/getList/?num=${param}`).then(res => res.data)
}
export const getClass = id => {
  return axios.get(`${base}/shop/getClass/?id=${id}`).then(res => res.data)
}
export const getFood = id => {
  return axios.get(`${base}/shop/getFood/?id=${id}`).then(res => res.data)
}
export const searchShop = param => {
  return axios.post(`${base}/shop/searchShop/`, {keyword: param}).then(res => res.data)
}
export const getLocation = param => {
  return axios.get(`${base}/location/getList/?id=${param}`).then(res => res.data)
}
export const changeLocation = param => {
  return axios.post(`${base}/location/changeLocation/`, param).then(res => res.data)
}
export const changeCurrentLocation = (param1, param2) => {
  return axios.get(`${base}/location/currentLocation/?id=${param1}&index=${param2}`).then(res => res.data)
}
export const addOrder = param => {
  return axios.post(`${base}/order/addOrder/`, param).then(res => res.data)
}
export const getOrder = param => {
  return axios.get(`${base}/order/getOrder/?id=${param}`).then(res => res.data)
}