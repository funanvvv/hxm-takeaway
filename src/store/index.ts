import { createStore } from 'vuex'

export default createStore({
  state: {
    userConfig: '',
  },
  mutations: {
    SET_USER_CONFIG (state, value) {
      state.userConfig = value
    },
  },
  actions: {
  },
  modules: {
  }
})
