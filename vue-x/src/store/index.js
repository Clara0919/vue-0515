import { createStore } from 'vuex'

export default createStore({
  state: {
    //data
    message: 'hello world',
    name: 'clara',
    age: 23,
    job: 'student'
  },
  getters: {
    //computed
    title(state) {
      return `${state.name}:${state.job}`
    },
    fullTitle(state, getters) {
      return `${getters.title}，${state.age}歲`
    }
    //getters可以取getters裡面的資料
  },
  mutations: {
    //methods
    setTitle(state, titleData) { //titleData是要儲存傳送給setTitle資料的參數
      state.name = titleData.name
      state.job = titleData.job
    }
  },
  actions: {
    //methods
  },
  modules: {
  }
})
