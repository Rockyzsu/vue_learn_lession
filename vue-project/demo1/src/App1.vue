<template>  
  <div>  
    <input type="text" v-model="inputValue" @blur="clearInput">  
    <p>输入框失去焦点时的值：{{ inputValue }}</p>  
  </div>  

  <div v-if="isShow">is show {{ isShow }}</div>
  <button @click="clickme">click me</button>
</template>  
  
<script>  
export default {  
  data() {  
    return {  
      inputValue: '',  
        isShow:true
    }  
  },  
  methods: {  
    clearInput() {  
      this.inputValue = ''  
    },
      clickme(){
      this.isShow = !this.isShow
      }
  }
}

</script>
