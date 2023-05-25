<template>
<div>
  <p v-if="showMessage">这是一条显示的消息</p>  
  <p v-else>这是一条隐藏的消息</p>  
</div>
</template>

<script>
const App1 = {
name:'App1',
    data(){
        return {
            showMessage:true
        }
    }

}
export default App1
</script>

