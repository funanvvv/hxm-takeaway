import { createStore } from 'vuex'

export default createStore({
  state: {
    phoneNumber: '',
    token: '',
    navbarStatu: true,
  },
  mutations: {
    SET_USER_PHONE (state, value) {
      state.phoneNumber = value
    },
    SET_USER_TOKEN (state, value) {
      state.token = value
    },
    SET_NAVBAR_STATU (state, value) {
      state.navbarStatu = value
    }
  },
  actions: {
  },
  modules: {
  }
})