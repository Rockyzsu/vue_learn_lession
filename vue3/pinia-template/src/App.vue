<script setup>
import {userStore} from './components/userStore'
const store = userStore()
const name = store.name
const updateName = (name)=>{
  store.setName(name);
  console.log(store.name);
}
</script>

<template>
  <div>
    <h1>Demo</h1>
    <router-link to="/">Home</router-link>
    <h2>Name : {{ name }}</h2>
    <router-view name="counter1"></router-view>
    <router-view name="counter2"></router-view>
    <h5>store username {{ store.name }}</h5>
    <h5>store username {{ store.currentName }}</h5>
    <button @click="updateName('Ask')">setName</button>

  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
