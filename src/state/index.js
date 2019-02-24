import Vue from 'vue'
import Vuex from 'vuex'
import statics from './modules/static'
import aside from './modules/aside'
import fonts from './modules/fonts'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    statics,
    aside,
    fonts 
  }
})









