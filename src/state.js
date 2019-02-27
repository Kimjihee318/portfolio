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
        {color: '#fff'},
        {color: '#fffae6'}, 
        {color: '#3f494f'},
        {color: '#95bcff'}
      ],
      // this is background-color
      colorIn: '#fff',
      heartIcon: [
        { icon: 'favorite_border', checked: false },
        { icon: 'favorite', checked: true }
      ],
      hearts: [true, false, false, false, false],
      hMsg: 'You like my work!'
    },
    asideOption: {
      categories: [
        {name: 'vue', checked: true},
        {name: 'd3', checked: true},
        {name: 'es6', checked: true},
        {name: 'scss', checked: true},
        {name: 'less', checked: true},
        {name: 'pug', checked: true},
      ],
      colorsorting: [
        ,'popular','dateAdded'
      ]
    },
    graphs: [
     {
      name: 'Vue-googlefont',
      link: 'https://kimjihee318.github.io/vue-googlefont/#/',
      img: '~@/assets/IMG_0025.jpg',
      imgLink: 'https://user-images.githubusercontent.com/26508791/53215805-8cb1cb80-3695-11e9-98c8-11059f3d1b69.png ',
      language: ['vue.js','vuex','es6','scss'],
      color: '#6b90cf',
      style: {
      'vue': true, 
      'd3': false, 
      'es6': true,
      'scss': true,
      'less': false,
      'pug': false,
      },
      show: true,
      myPick: true,
     },
    {
      name: 'Billing dashboard',
      link: 'https://kimjihee318.github.io/Co2Emission_v4.html',
      img: '~@/assets/IMG_0025.jpg',
      imgLink: 'https://user-images.githubusercontent.com/26508791/53301463-89d1f900-3896-11e9-8082-61e367cad008.jpg',
      language: ['d3.js','pug','less','bootstrap'],
      color: '#6b90cf',
      style: {
        'vue': false, 
        'd3': true, 
        'es6': true,
        'scss': false,
        'less': true,
        'pug': true,
      },
      show: true,
      myPick: true,
    },
    {
      name: 'Dashboard',
      link: 'https://kimjihee318.github.io/Co2Emission_v4.html',
      img: '~@/assets/IMG_0025.jpg',
      imgLink: 'https://user-images.githubusercontent.com/26508791/53301461-850d4500-3896-11e9-8fd6-37b869d7104c.png',
      language: ['d3.js','pug','scss','bootstrap'],
      color: '#6b90cf',
      style: {
        'vue': false, 
        'd3': true, 
        'es6': true,
        'scss': true,
        'less': false,
        'pug': true,
      },
      show: true,
      myPick: false,
    },
    {
      name: 'D3 animation',
      link: 'https://kimjihee318.github.io/d3_animation/index.html',
      img: '~@/assets/IMG_0025.jpg',
      imgLink: 'https://user-images.githubusercontent.com/26508791/53301445-67d87680-3896-11e9-860c-a57d3c83a6eb.png',
      language: ['d3.js'],
      color: '#6b90cf',
      style: {
        'vue': false, 
        'd3': true, 
        'es6': true,
        'scss': false,
        'less': false,
        'pug': false,
      },
      show: true,
      myPick: true,
    },
    {
      name: 'CO2 Emission',
      link: 'https://kimjihee318.github.io/Co2Emission_v4.html',
      img: '~@/assets/IMG_0025.jpg',
      imgLink: 'https://github.com/Kimjihee318/Kimjihee318.github.io/blob/master/images/co2_crop2.png?raw=true',
      language: ['d3.js'],
      color: '#6b90cf',
      style: {
        'vue': false, 
        'd3': true, 
        'es6': true,
        'scss': false,
        'less': false,
        'pug': false,
      },
      show: true,
      myPick: false,
    },
     {
       name: 'Air pollution',
       link: 'https://kimjihee318.github.io/Co2Emission_v4.html',
       img: '~@/assets/IMG_0025.jpg',
       imgLink: 'https://github.com/Kimjihee318/Kimjihee318.github.io/blob/master/images/subway_air.png?raw=true',
       language: ['d3.js'],
       color: '#6b90cf',
       style: {
        'vue': false, 
        'd3': true, 
        'es6': true,
        'scss': false,
        'less': false,
        'pug': false,
       },
       show: true,
       myPick: false,
     },
     {
       name: 'Subway People',
       link: 'https://kimjihee318.github.io/subway.html',
       img: '~@/assets/IMG_0025.jpg',
       imgLink: 'https://github.com/Kimjihee318/Kimjihee318.github.io/blob/master/images/subwayProject.png?raw=true',
       language: ['d3.js'],
       color: '#6b90cf',
       style: {
        'vue': false, 
        'd3': true, 
        'es6': true,
        'scss': false,
        'less': false,
        'pug': false,
       },
       show: true,
       myPick: false,
     },
     {
      name: 'Bigmac index',
      link: 'https://kimjihee318.github.io/bigMac_index.html',
      img: '~@/assets/IMG_0025.jpg',
      imgLink: 'https://github.com/Kimjihee318/Kimjihee318.github.io/blob/master/images/bigMac_datavis.png?raw=true',
      language: ['d3.js'],
      color: '#6b90cf',
      style: {
        'vue': false, 
        'd3': true, 
        'es6': true,
        'scss': false,
        'less': false,
        'pug': false,
      },
      show: true,
      myPick: false,
    },
     {
       name: 'Rate of suicide',
       link: 'https://kimjihee318.github.io/suicide_smallMultiples.html',
       img: '~@/assets/IMG_0025.jpg',
       imgLink: 'https://github.com/Kimjihee318/Kimjihee318.github.io/blob/master/images/suicide.png?raw=true',
       language: ['d3.js'],
       color: '#6b90cf',
       style: {
        'vue': false, 
        'd3': true, 
        'es6': true,
        'scss': false,
        'less': false,
        'pug': false,
       },
       show: true,
       myPick: false,
     },
     {
       name: '세계 Co2 배출량',
       link: 'https://kimjihee318.github.io/Co2Emission_v4.html',
       img: '~@/assets/IMG_0025.jpg',
       imgLink: '../../../assets/IMG_0025.jpg',
       language: ['d3.js'],
       color: '#6b90cf',
       style: {
        'vue': false, 
        'd3': true, 
        'es6': true,
        'scss': false,
        'less': false,
        'pug': false,
       },
       show: true,
       myPick: false,
     },
     {
       name: '세계 Co2 배출량',
       link: 'https://kimjihee318.github.io/Co2Emission_v4.html',
       img: '~@/assets/suicide.png',
       imgLink: '../../../assets/IMG_0025.jpg',
       language: ['d3.js'],
       color: '#6b90cf',
       style: {
        'vue': false, 
        'd3': true, 
        'es6': true,
        'scss': false,
        'less': false,
        'pug': false,
       },
       show: true,
       myPick: false,
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
      let fonts = state.graphs
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
    clickPlus (state, payload) {
      state.graphs[payload].show = !state.graphs[payload].show
    },
    clickFavorite (state) {
      if (state.showOption.hearts.length<12){
        return state.showOption.hearts.push(true)
      }
      return false
    },
    clickCheck (state, payload){
      state.asideOption.categories[payload].checked = !state.asideOption.categories[payload].checked
    },
    menuClick(state){
      state.showOption.show = !state.showOption.show
    }
  },
  actions: {
    //
  }
})