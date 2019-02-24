export default {
  namespaced: true,
  //로컬에서만 사용 하겠다.

  state: {
    fonts: [
      { 
        information: {
        name: 'roboto',
        designer: 'christmas',
        },
        options: {
          categories: [
            {name: 'Serif', checked: false},
            {name: 'Sans serif', checked: true},
            {name: 'Display', checked: false},
            {name: 'HandWriting', checked: true},
            {name: 'MonoSpace', checked: true}
          ]
        }
      },
      {
        information: {
          name: 'robotong',
          designer: 'christmas'
        },
        options: {
          categories: [
            {name: 'Serif', checked: true},
            {name: 'Sans serif', checked: true},
            {name: 'Display', checked: true},
            {name: 'HandWriting', checked: true},
            {name: 'MonoSpace', checked: false}
          ]
        }
      },
      {
        information: {
          name: 'roboting',
          designer: 'christmas'
        },
        options: {
          categories: [
            {name: 'Serif', checked: true},
            {name: 'Sans serif', checked: true},
            {name: 'Display', checked: true},
            {name: 'HandWriting', checked: true},
            {name: 'MonoSpace', checked: false}
          ]
        }
      }
    ]
  },
  getters: {
    
  },
  mutations: {
    
  },
  actions: {

  }
}