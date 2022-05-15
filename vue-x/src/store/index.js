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
    //可以去改變上面state的資料
    setTitle(state, titleData) { //titleData是要儲存傳送給setTitle資料的參數
      state.name = titleData.name
      state.job = titleData.job
    }
  },
  actions: {
    //methods
    //類似mutations但是他不會更改資料，需要透過commit呼叫mutations傳遞出資料
  },
  modules: {
  }
})
