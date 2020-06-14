export default {
  SET_KANBANS (state, payload) {
    // console.log(payload, 'kanbans mutation')
    state.kanbans = payload
  },
  SET_KANBAN (state, payload) {
    state.kanban = payload
  },
  SET_LOADING (state, payload) {
    state.loading = payload
  },
  SET_LAST_ID (state, payload) {
    state.lastId = payload
  },
  SET_IS_USER (state, payload) {
    state.isUser = payload
  }
}
