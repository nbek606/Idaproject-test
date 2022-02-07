import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    paths: [
      'product.list',
      'product.lastId'
    ]
  })(store)
}