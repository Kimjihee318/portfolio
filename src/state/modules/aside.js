export default {
  namespaced: true,

  state: {
    asideOption: {
      categories: [
        {name: 'Serif', checked: true},
        {name: 'Sans serif', checked: true},
        {name: 'Display', checked: true},
        {name: 'HandWriting', checked: true},
        {name: 'MonoSpace', checked: true},
      ],
    sorting: ['trendeing','popular','dateAdded'],
    language: ['english','korean','japanese','chinese','french']
    },
    checkoutStatus: null
  },
  getters: {
   
  },
  mutations: {
    clickCheck (state, payload){
      state.asideOption.categories[payload].checked = !state.asideOption.categories[payload].checked
    }
  },
  actions: {

  }
}