import Vue from 'vue'
import Vuex from 'vuex'
import jQuery from 'jquery'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)
Vue.prototype.$jQuery = jQuery
const debug = process.env.NODE_ENV !== 'production'

const state = {
  alert: {
    showAlert: false,
    alertClass: 'success',
    alertIconClass: 'icon fa fa-check',
    headerText: 'Alert!',
    content: 'Test content'
  },
  loading: 'none',  
  loadingText: 'Loading...',
  records: []
}

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})