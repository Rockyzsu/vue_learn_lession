<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/user/112">User</router-link> | 
    <router-link to="/setting/detail">跳转到子路由</router-link> |  
    <router-link :to="{path:'/setting/detail'}">跳转到子路由2</router-link>
    <div>
      <h3>路由的内容</h3>
      <router-view />
      <h3>路由结束</h3>

    </div>
  </div>

</template>

<script>

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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
