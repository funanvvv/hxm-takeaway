import { createStore } from 'vuex'

export default createStore({
  state: {
    phoneNumber: '',
    token: '',
  },
  mutations: {
    SET_USER_PHONE (state, value) {
      state.phoneNumber = value
    },
    SET_USER_TOKEN (state, value) {
      state.token = value
    },
  },
  actions: {
  },
  modules: {
  }
})