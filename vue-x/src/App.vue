<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <h3>{{$store.state.message}}</h3>
  <h3>{{$store.getters.fullTitle}}</h3>
  姓名：<input type="text" v-model="name">
  <!-- 設定v-model要記得設定相對應的data欄位接收資料 -->
  職位：<input type="text" v-model="job">
  <button @click="updateTitle">更新資料</button>
</template>

<script>

export default {
data(){
  return{
    name:"",
    job:""
  }
},
methods:{
  updateTitle(){
    this.$store.commit("setTitle",{  //把資料傳到setTitle中相對應的欄位
      name:this.name,
      job:this.job
    })
  }
}


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
