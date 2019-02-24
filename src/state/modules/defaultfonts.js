import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const defaultFonts = new Vuex.Store({
  state: {
    defaultOptions: {
      text: '수고했어 오늘도',
      fontSize: 40,
      fontWeight: '400'
    },
    stringArr: [
      {val: 'paragraph', content: 'my name is jiheekim'},
      {val: 'alphabet', content: 'abcdefghijklmnopqrstuvw'},
      {val: 'korean', content: '수고했어 오늘도'},
      {val: 'number', content: '123456789'}
    ],
    weightArr: [
      {val: 'light', content: '300'},
      {val: 'regular', content: '400'},
      {val: 'medium', content: '500'},
      {val: 'bold', content: '600'}
    ]
  }
})