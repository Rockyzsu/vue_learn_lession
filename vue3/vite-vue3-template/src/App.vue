<script setup>
</script>

<template>
  <div>
    <h1>Demo</h1>
    <router-link to="/">Home</router-link>

    <router-view name="counter1"></router-view>
    <router-view name="counter2"></router-view>
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
