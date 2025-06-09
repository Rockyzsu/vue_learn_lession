<script setup>
import { ref, inject } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
import { Axios } from 'axios';
const axios = inject('axios')
const html = ref('HTML区域')
axios.get('http://huishao.cc').then((resp) => {
  html.value = resp.data
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>

  </div>

  <div v-html="html">

  </div>
</template>

<style scoped>

</style>
