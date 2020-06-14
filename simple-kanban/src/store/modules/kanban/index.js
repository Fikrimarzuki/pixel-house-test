import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  state: {
    kanbans: [],
    kanban: [{
      id: 1,
      name: 'development',
      content: []
    }, {
      id: 2,
      name: 'progress',
      content: []
    }, {
      id: 3,
      name: 'testing',
      content: []
    }, {
      id: 4,
      name: 'production',
      content: []
    }],
    loading: false,
    lastId: null,
    isUser: false
  },
  mutations,
  actions
}
