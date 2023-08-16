import Vuex from 'vuex'

import { userStore } from './user.store.js'
import { dataStore } from './data.store.js'

export const store = Vuex.createStore({
  strict: true,
  modules: {
    userStore,
    dataStore,
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
