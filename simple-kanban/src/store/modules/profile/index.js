import actions from './actions'
import mutations from './mutations'

export default {
  namespace: true,
  state: {
    users: [
      { id: 1, name: 'profile 1' },
      { id: 2, name: 'profile 2' },
      { id: 3, name: 'profile 3' },
      { id: 4, name: 'profile 4' },
      { id: 5, name: 'profile 5' },
      { id: 6, name: 'profile 6' },
      { id: 7, name: 'profile 7' },
      { id: 8, name: 'profile 8' },
      { id: 9, name: 'profile 9' },
      { id: 10, name: 'profile 10' }
    ],
    loading: false
  },
  mutations,
  actions
}
