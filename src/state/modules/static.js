export default {
  namespaced: true,
  //로컬에서만 사용 하겠다.
  state: {
    defaultOptions: {
      text: 'my name is jiheekim',
      fontSize: 30,
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
    ],
    showOption: {
      show: false,
      payloadIndex: []
    },
    checkoutStatus: null
  },
  getters: {
    show: state => state.showOption.show,
    strings: state => state.stringArr,    
    weihgts: state => state.weightArr,
    fontSizes: state => state.defaultOptions.fontSize,
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
    }
  },
  actions: {

  }
}