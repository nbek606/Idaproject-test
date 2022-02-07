export const state = () => ({
  list: [],
  lastId: 0
})

export const getters = {
  getList: (state) => state.list,
  getLastId: state => state.lastId
}

export const actions = {
  setProduct({ commit }, payload) {
    commit('setProduct', payload)
    commit('incrementId')
  },
  removeProduct ({ commit }, id) {
    commit('removeProduct', id)
  }
}

export const mutations = {
  setProduct (state, payload) {
    state.list.push(payload)
  },

  incrementId (state) {
    state.lastId++
  },

  removeProduct (state, id) {
    state.list = state.list.filter(item => item.id != id)
  }

}
