import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { desks: [] },
  mutations: {
    setDesks (state, desks) {
      state.desks = desks
    }
  },
  actions: {
    // fetchDesks ({ commit }) {
    //   let desks = [
    //     { id: 1, title: 'First Desk', is_favourite: 1 },
    //     { id: 2, title: 'Second Desk', is_favourite: 0 }
    //   ]
    //   commit('setDesks', desks)
    //   // axios.get()
    // }
  },
  modules: {}
})
