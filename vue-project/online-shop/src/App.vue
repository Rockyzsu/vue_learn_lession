<script>

</script>

<template>
<div id="app">
<router-view/>
<van-tabbar
    route
    v-model='active'
    @change='onChange'
    active-color='#ee0a24'
    inactive-color='#000'

    >

    <van-tabbar-item icon='home-o' to="/home">Home</van-tabbar-item>
    <van-tabbar-item icon='cart-o' to="/cart">Cart</van-tabbar-item>
    <van-tabbar-item icon='user-o' to="/user">User</van-tabbar-item>

  </van-tabbar>
  </div>


</template>

<style scoped>
#app{
height:100vh;
padding:0;
margin:0;
box-sizing:border-box;
}
</style>

