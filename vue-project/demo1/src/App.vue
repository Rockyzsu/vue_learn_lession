<template>  
  <div>  
    <input type="text" v-model="inputValue" @blur="clearInput">  
    <p>输入框失去焦点时的值：{{ inputValue }}</p>  
  </div>  
</template>  
  
<script>  
export default {  
  data() {  
    return {  
      inputValue: ''  
    }  
  },  
  methods: {  
    clearInput() {  
      this.inputValue = ''  
    }  
  }  
}  
</script>
