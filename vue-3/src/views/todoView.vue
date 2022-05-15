<template>
 <h1>User {{userId}} 的 Todo</h1>
 <ol>
    <li v-for="todo in todos">  
        <h4>{{todo.title}}</h4>
        是否完成? <input type="checkbox" v-model="todo.completed"> 
        <!-- 從todo裡面拿completed這一項資料 -->
    </li>
</ol> 
</template>
<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  data(){
      return{
          todos:{} //設定空物件
      }
  },
  computed:{
      userId(){
          return this.$route.params.userId //$route.params.userId 是從網址中抓取userId
      }
  },
  watch:{
      userId:function(newId){
          this.fetchTodos(newId)
      }
  },
  mounted(){
      let userId=this.$route.params.userId
      this.fetchTodos(userId); //引用methods裡面的fetchTodos函式
  },
  methods:{
      fetchTodos(userId){
          axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
          .then(response=>this.todos=response.data)
      }
  }
  
}
</script>
