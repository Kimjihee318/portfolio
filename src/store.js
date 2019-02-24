import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    defaultOptions: {
      text: 'Music is my Life',
      fontSize: 30,
      fontWeight: '300'
    },
    stringArr: [
      {val: 'paragraph', content: 'Music is my Life'},
      {val: 'alphabet', content: 'abcdefghijklmnopqrstuvw'},
      {val: 'korean', content: '수고했어 오늘도'},
      {val: 'number', content: '123456789'}
    ],
    weightArr: [
      {val: 'light', content: '300'},
      {val: 'regular', content: '400'},
      {val: 'medium', content: '500'},
      {val: 'bold', content: '600'}
    ],
    showOption: {
      show: true,
      defaultIndex: [0,1,2,3,4],
      payloadIndex: []
    },
    options: [
      {name: 'Serif', checked: true},
      {name: 'Sans Serif', checked: false},
      {name: 'Display', checked: false},
    ],
    fontsL: [
      {name: 'A', style: {'Serif': true, 'Sans Serif': false, 'Display':false}},
      {name: 'B', style: {'Serif': false, 'Sans Serif': true, 'Display':true}},
      {name: 'C', style: {'Serif': true, 'Sans Serif': true, 'Display':false}},
    ],
    asideOption: {
      categories: [
        {name: 'Serif', checked: true},
        {name: 'Sans serif', checked: true},
        {name: 'Display', checked: true},
        {name: 'HandWriting', checked: true},
        {name: 'MonoSpace', checked: true},
      ],
      sorting: [
        'trendeing','popular','dateAdded'
      ],
      language: [
        'english','korean','japanese','chinese','french'
      ],
    },
    fonts: [
      { 
        information: {
        name: 'roboto',
        designer: 'christmas',
        },
        style: {
          'Serif': true, 
          'Sans Serif': false, 
          'Display':false
        }
      },
      {
        information: {
          name: 'robotong',
          designer: 'christmas'
        },
        style: {
          'Serif': false, 
          'Sans Serif': true, 
          'Display':false
        }
      },
      {
        information: {
          name: 'roboting',
          designer: 'christmas'
        },
        style: {
          'Serif': true, 
          'Sans Serif': true, 
          'Display':false
        }
      }
    ]
  },
  getters: {
    // 이곳을 사용 해주세요.
  },
  mutations: {
    textVmodel (state, message) {
      state.defaultOptions.text = message
    },
    weightVmodel (state, weight) {
      state.defaultOptions.fontWeight = weight
    },
    sizeVmodel (state, size) {
      state.defaultOptions.fontSize = size
    },
    clickPlus (state) {
      state.showOption.show = !state.showOption.show
    },
    clickCheck (state, payload){
      state.asideOption.categories[payload].checked = !state.asideOption.categories[payload].checked
    }
  },
  actions: {
    //
  }
})