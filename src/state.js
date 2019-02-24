import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    showOption: {
      show: true,
      defaultIndex: [0,1,2,3,4],
      payloadIndex: [],
      colors: [
        {color: 'white'},
        {color: '#4feaff'}, 
        {color: '#ffff48'},
        {color: '#57caff'}
      ],
      colorIn: 'white',
      hearts: [true, true, false, false, false]
    },
    asideOption: {
      categories: [
        {name: 'VUE', checked: true},
        {name: 'D3', checked: true},
        {name: 'SCSS', checked: true},
        {name: 'STUDY', checked: true},
      ],
      colorsorting: [
        ,'popular','dateAdded'
      ]
    },
    graphs: [
     {
       name: 'vue-googlefont',
       link: 'https://kimjihee318.github.io/vue-googlefont/#/',
       img: './assets/suicide.png',
       language: ['vue, scss']
     },
     {
       name: '세계 Co2 배출량',
       link: 'https://kimjihee318.github.io/Co2Emission_v4.html',
       img: './assets/suicide.png',
       language: ['d3']
     },
     {
       name: '세계 Co2 배출량',
       link: 'https://kimjihee318.github.io/Co2Emission_v4.html',
       img: './assets/suicide.png',
       language: ['d3']
     },
     {
       name: '지하철 공기질',
       link: 'https://kimjihee318.github.io/Co2Emission_v4.html',
       img: './assets/suicide.png',
       language: ['d3']
     },
     {
       name: '지하철 노선별 인구',
       link: 'https://kimjihee318.github.io/subway.html',
       img: './assets/suicide.png',
       language: ['d3']
     },
     {
       name: '빅맥 지수',
       link: 'https://kimjihee318.github.io/bigMac_index.html',
       img: './assets/suicide.png',
       language: ['d3']
     },
     {
       name: '세계 자살률 추이',
       link: 'https://kimjihee318.github.io/suicide_smallMultiples.html',
       img: './assets/suicide.png',
       language: ['d3']
     },
     {
       name: '세계 Co2 배출량',
       link: 'https://kimjihee318.github.io/Co2Emission_v4.html',
       img: './assets/suicide.png',
       language: ['d3']
     },
     {
       name: '세계 Co2 배출량',
       link: 'https://kimjihee318.github.io/Co2Emission_v4.html',
       img: './assets/suicide.png',
       language: ['d3']
     },
    ],
    fonts: [
      { 
        information: {
          name: 'Kimjihee',
          sorting: 100,
          language: ['english','korean'],
          defaultOptions: {
            text: 'DESIGNER',
            fontSize: 40,
            fontWeight: '400',
            fontFamily: 'Lobster',
            show: true,
          },
          stringArr: [
            {val: 'Tool', content: 'DESIGNER'},
            {val: 'Sketch', content: 'Good'},
            {val: 'Illustrator', content: 'Good'},
            {val: 'Indesign', content: 'Good'},
            {val: 'photoshop', content: '123456789'}
          ],
          weightArr: [
            {val: 'light', content: '300'},
            {val: 'regular', content: '400'},
            {val: 'medium', content: '500'},
            {val: 'bold', content: '600'}
          ]
        },
        style: {
          'Vue': true, 
          'D3': false, 
          'SCSS': true,
          'STUDY': true,
        }
      }
    ],
    // 작업
    project: [
      {
        name:"summary",
        favorite: false,
        langeuage: {
          'VUE': true, 
          'D3': false, 
          'SCSS': true,
          'STUDY': true,
        }
      }
    ]
  },
  getters: {
    isVisible : function(state){
      let fonts = state.fonts
      let options = state.asideOption.categories
      function isVisible(options, font){
        for(let i =0; i<options.length; i++) {
          if(options[i].checked && font.style[options[i].name]) return true
        }
        return false
      }
      return fonts.map(font => isVisible(options,font))
    }
  },
  mutations: {
    textVmodel (state, message) {
      state.fonts[message.num].information.defaultOptions.text = message.value
    },
    weightVmodel (state, weight) {
      state.fonts[weight.num].information.defaultOptions.fontWeight = weight.value
    },
    sizeVmodel (state, size) {
      state.fonts[size.num].information.defaultOptions.fontSize = size.value
    },
    colorVmodel (state, color) {
      state.showOption.colorIn = color.color
    },
    clickPlus (state) {
      state.showOption.show = !state.showOption.show
    },
    clickFavorite (state) {
      if (state.showOption.hearts.length<13){
        return state.showOption.hearts.push(true)
      }
      return false
    },
    clickCheck (state, payload){
      state.asideOption.categories[payload].checked = !state.asideOption.categories[payload].checked
    }
  },
  actions: {
    //
  }
})