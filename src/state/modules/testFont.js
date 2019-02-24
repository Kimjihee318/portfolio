import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  options: [
    {name: 'Serif', checked: true},
    {name: 'Serif', checked: true},
    {name: 'Serif', checked: true},
  ],
  fonts: [
    {name: 'A', style: {'Serif': true, 'Sans Serif': false, 'Display':false}},
    {name: 'A', style: {'Serif': true, 'Sans Serif': false, 'Display':false}},
    {name: 'A', style: {'Serif': true, 'Sans Serif': false, 'Display':false}},
  ]
})