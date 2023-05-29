<script>
export default {
name:"App",
  data(){
    return {students:[]}
  },
  methods:{
    student_info(){
      this.$axios.get('http://127.0.0.1:3000/student/').then(res=>{console.log(res.data);
      this.students = res.data;
      console.log(res.config);
      });
    }
  }
}
</script>

<template>
  <div>
  
  <button @click="student_info">student info</button>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
        <th>score</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in students" :key="item.id">
        <th>{{item.id}}</th>
        <th>{{item.name}}</th>
        <th>{{item.age}}</th>
        <th>{{item.score}}</th>
      </tr>
    </tbody>
  </table>
  </div>
</template>
<style lange="less">
#app{
background-color:yellow;
text-align:center;
color:#2c350;
margin-top:60px;
}
</style>
