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
        {color: '#fff', font:'#000', github: '#aaa', heart: '💙'},
        {color: '#fffae6', font:'#000', github: '#aaa', heart: '🧡'}, 
        {color: '#3f494f', font:'#ddd', github: '#aaa', heart: '💛'},
        {color: '#95bcff', font:'#000', github: '#aaa', heart: '💝'}
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
        name: 'Vue-portfolio',
        link: 'https://kimjihee318.github.io/portfolio/#/',
        img: '~@/assets/IMG_0025.jpg',
        imgLink: 'https://user-images.githubusercontent.com/26508791/53617063-d87deb00-3c28-11e9-8586-f99331644370.png',
        language: ['vue','vuex','es6','scss'],
        style: {
        'vue': true, 
        'd3': false, 
        'es6': true,
        'scss': true,
        'less': false,
        'pug': false,
        },
        show: true,
        haveGit: {done:true, link:'https://github.com/Kimjihee318/portfolio'},
       },
     {
      name: 'Vue-google font',
      link: 'https://kimjihee318.github.io/vue-googlefont/#/',
      img: '~@/assets/IMG_0025.jpg',
      imgLink: 'https://user-images.githubusercontent.com/26508791/53617059-d7e55480-3c28-11e9-8b71-27520c41aaa9.png',
      language: ['vue','vuex','es6','scss'],
      style: {
      'vue': true, 
      'd3': false, 
      'es6': true,
      'scss': true,
      'less': false,
      'pug': false,
      },
      show: true,
      haveGit: {done:true, link:'https://github.com/Kimjihee318/vue-googlefont'}
     },
    {
      name: 'Billing dashboard',
      link: 'https://docs.google.com/document/d/1VwzxB98dsVEeqw8ebqJbWvIaL7IRbc68MsR20Z3XEEY/edit?usp=sharing',
      img: '~@/assets/IMG_0025.jpg',
      imgLink: 'https://user-images.githubusercontent.com/26508791/53617062-d87deb00-3c28-11e9-8d91-f72198ed4ee4.png',
      language: ['d3','pug','less','bootstrap'],
      style: {
        'vue': false, 
        'd3': true, 
        'es6': true,
        'scss': false,
        'less': true,
        'pug': true,
      },
      show: true,
      haveGit: {done:false, link:''}
    },
    {
      name: 'Issue Dashboard',
      link: 'https://docs.google.com/document/d/1NlvrSNjUBVaUq_uYmp01x5QuSGgF19bvrjVoGCuqjk4/edit?usp=sharing',
      img: '~@/assets/IMG_0025.jpg',
      imgLink: 'https://user-images.githubusercontent.com/26508791/53529918-93c35880-3b31-11e9-923f-85bc97c0617e.png',
      language: ['d3','pug','scss','bootstrap'],
      style: {
        'vue': false, 
        'd3': true, 
        'es6': false,
        'scss': true,
        'less': false,
        'pug': true,
      },
      show: true,
      haveGit: {done:false, link:''},
    },
    {
      name: 'D3 animation',
      link: 'https://kimjihee318.github.io/d3_animation/index.html',
      img: '~@/assets/IMG_0025.jpg',
      imgLink: 'https://user-images.githubusercontent.com/26508791/53617375-48d93c00-3c2a-11e9-8b0a-467633653f82.png',
      language: ['d3'],
      style: {
        'vue': false, 
        'd3': true, 
        'es6': false,
        'scss': false,
        'less': false,
        'pug': false,
      },
      show: true,
      haveGit: {done:true, link:'https://github.com/Kimjihee318/d3_animation'},
    },
    {
      name: 'Pivot',
      link: 'https://docs.google.com/document/d/1Lj5odn0G0jyhHzmaU66M8XTlemEgkwcN4_JVCKKEMv4/edit?usp=sharing',
      img: '~@/assets/IMG_0025.jpg',
      imgLink: 'https://user-images.githubusercontent.com/26508791/53617061-d87deb00-3c28-11e9-8d32-6e6dea004075.png',
      language: ['Tool: Sketch'],
      style: {
        'vue': false, 
        'd3': false, 
        'es6': false,
        'scss': true,
        'less': false,
        'pug': true,
      },
      show: true,
      haveGit:  {done:false, link:''},
    },
    {
      name: 'CO2 Emission',
      link: 'https://kimjihee318.github.io/Co2Emission_v4.html',
      img: '~@/assets/IMG_0025.jpg',
      imgLink: 'https://user-images.githubusercontent.com/26508791/53530558-860ed280-3b33-11e9-98e4-ec0860e5418b.png',
      language: ['d3'],
      style: {
        'vue': false, 
        'd3': true, 
        'es6': false,
        'scss': false,
        'less': false,
        'pug': false,
      },
      show: true,
      haveGit: {done:true, link:'https://github.com/Kimjihee318/Kimjihee318.github.io'},
    },
     {
       name: 'Air pollution',
       link: 'https://kimjihee318.github.io/subway_air.html',
       img: '~@/assets/IMG_0025.jpg',
       imgLink: 'https://user-images.githubusercontent.com/26508791/53530420-244e6880-3b33-11e9-9768-c0590c08df24.png',
       language: ['d3'],
       style: {
        'vue': false, 
        'd3': true, 
        'es6': false,
        'scss': false,
        'less': false,
        'pug': false,
       },
       show: true,
       haveGit: {done:true, link:'https://github.com/Kimjihee318/Kimjihee318.github.io'},
     },
     {
       name: 'Subway People',
       link: 'https://kimjihee318.github.io/subway.html',
       img: '~@/assets/IMG_0025.jpg',
       imgLink: 'https://user-images.githubusercontent.com/26508791/53530421-244e6880-3b33-11e9-944f-9df92128d1b6.png',
       language: ['d3'],
       style: {
        'vue': false, 
        'd3': true, 
        'es6': false,
        'scss': false,
        'less': false,
        'pug': false,
       },
       show: true,
       haveGit: {done:true, link:'https://github.com/Kimjihee318/Kimjihee318.github.io'},
     },
     {
      name: 'Bigmac index',
      link: 'https://kimjihee318.github.io/bigMac_index.html',
      img: '~@/assets/IMG_0025.jpg',
      imgLink: 'https://user-images.githubusercontent.com/26508791/53572735-4be31680-3baf-11e9-8ae0-1d04c8174692.png',
      language: ['d3'],
      style: {
        'vue': false, 
        'd3': true, 
        'es6': false,
        'scss': false,
        'less': false,
        'pug': false,
      },
      show: true,
      haveGit: {done:true, link:'https://github.com/Kimjihee318/Kimjihee318.github.io'},
    },
     {
       name: 'Rate of suicide',
       link: 'https://kimjihee318.github.io/suicide_smallMultiples.html',
       img: '~@/assets/IMG_0025.jpg',
       imgLink: 'https://user-images.githubusercontent.com/26508791/53530533-75f6f300-3b33-11e9-9063-5459d1a2c4f3.png',
       language: ['d3'],
       style: {
        'vue': false, 
        'd3': true, 
        'es6': false,
        'scss': false,
        'less': false,
        'pug': false,
       },
       show: true,
       haveGit: {done:true, link:'https://github.com/Kimjihee318/Kimjihee318.github.io'},
     },
     {
       name: 'Seoul Weather',
       link: 'https://kimjihee318.github.io/seoul_weather_year.html',
       img: '~@/assets/IMG_0025.jpg',
       imgLink: 'https://user-images.githubusercontent.com/26508791/53530083-1e0bbc80-3b32-11e9-8da8-7c7ed96c99a5.png',
       language: ['d3'],
       style: {
        'vue': false, 
        'd3': true, 
        'es6': false,
        'scss': false,
        'less': false,
        'pug': false,
       },
       show: true,
       haveGit: {done:true, link:'https://github.com/Kimjihee318/Kimjihee318.github.io'},
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
      state.showOption.colorIn = color
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