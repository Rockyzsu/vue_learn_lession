<template>
  <div id="nav">

    <router-link to="/">Home</router-link> | 
    <router-link to="/about">About</router-link>|
    <router-link to="/hello">Hello</router-link>
  </div>
<router-view/>


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
