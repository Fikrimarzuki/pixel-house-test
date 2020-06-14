import jsonPlaceholderAPI from '../../../config/jsonPlaceholderAPI'

export default {
  fetchKanban (context) {
    return jsonPlaceholderAPI.get('/posts')
  }
}
