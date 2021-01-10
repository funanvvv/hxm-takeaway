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
    console.log("请求错误", err.response)
  }
  return Promise.reject(err)
})


export const testApi = params => {
  return axios.post(`${base}/user/login?username=null&password=123456`, qs.stringify(params)).then(res => res.data)
}













//登录
export const userLogin = params => {
  return axios.post(`${base}/sys/user/login`, qs.stringify(params)).then(res => res.data)
}
//查询用户信息
export const getUserInfo = params => {
  return axios.get(`${base}/sys/user/get_user_info/${params}`).then(res => res.data)
}
//查询应用
export const getApp = (page, num) => {
  return axios.get(`${base}/app/get_all_app/${page}/${num}`).then(res => res.data)
}
//添加应用
export const addApp = params => {
  return axios.post(`${base}/app/add_app`, params, {headers: {'Content-Type': 'multipart/form-data'}}).then(res => res.data)
}
//添加公众号
export const addSubscription = params => {
  return axios.post(`${base}/subscription/add_subscription`, qs.stringify(params)).then(res => res.data)
}
//获取已授权公众号
export const getGrantedSub = () => {
  return axios.get(`${base}/subscription/get_authorized_subscription`).then(res => res.data)
}
//获取未授权公众
export const getUngrantedSub = () => {
  return axios.get(`${base}/subscription/get_unauthorized_subscription`).then(res => res.data)
}
//模糊查询公众号
export const vagueSub = param => {
  return axios.get(`${base}/subscription/get_subscription_by_name`, {params: param}).then(res => res.data)
}
//模糊搜索应用
export const vagueApp = param => {
  return axios.get(`${base}/app/get_app_by_name`, {params: param}).then(res => res.data)
}
//绑定公众号
export const bindingSub = params => {
  return axios.put(`${base}/app/binding_subscription`, qs.stringify(params)).then(res => res.data)
}
//id查询应用
export const idSearchApp = params => {
  return axios.get(`${base}/app/app_details/${params}`).then(res => res.data)
}
//id查询公众号
export const idSearchSub = params => {
  return axios.get(`${base}/subscription/get_subscription/${params}`).then(res => res.data)
}
//重置app_secret
export const resetAppSecret = params => {
  return axios.put(`${base}/app/reset/${params}`).then(res => res.data)
}
//查询对接应用
export const getLinkApp = params => {
  return axios.get(`${base}/app/get_apps/${params}`).then(res => res.data)
}
//修改公众号appSecret
export const changeSubSecret = params => {
  return axios.put(`${base}/subscription/update_appsecret`, qs.stringify(params)).then(res => res.data)
}
//公众号关闭应用
export const subShutApp = params => {
  return axios.put(`${base}/app/stop_app`, qs.stringify(params)).then(res => res.data)
}
//公众号开启应用
export const subOpenApp = params => {
  return axios.put(`${base}/app/open_app`, qs.stringify(params)).then(res => res.data)
}