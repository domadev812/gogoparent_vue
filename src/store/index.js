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
  records: [],
  token: null
}

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})