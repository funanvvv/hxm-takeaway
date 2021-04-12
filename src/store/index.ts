import { createStore } from 'vuex'

export default createStore({
  state: {
    id: '',
    token: '',
  },
  mutations: {
    SET_USER_ID (state, value) {
      state.id = value
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