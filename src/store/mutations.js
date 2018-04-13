export default {  
  SET_RECORDS (state, records) {
    state.records = records
  },

  SET_TOKEN (state, token) {
    state.token = token
    localStorage.setItem('access_token', token)
  }
}