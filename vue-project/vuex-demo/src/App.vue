<script setup>
//import store from './store'

import { useStore } from 'vuex'
const  store = useStore()
console.log(store)
console.log(store.state.count);

function commit(){
    store.commit('increment')
    console.log('commit');
}

function reset(){
store.commit('reset');
    console.log('reset');
}

function delay_sync(){
store.commit('add_x',10);
}

function asyncio_action(){
    console.log('delay action 1')
    store.dispatch('delay_action',20)
    console.log('delay action 2')
}
</script>

<template>
  <div>Count: {{ store.state.count }} ==== </div>
  <button @click='commit'>Update count</button>
  <button @click='reset'>Reset count</button>
  <button @click='delay_sync'>Add X</button>
  <button @click='asyncio_action'>async_io</button>

</template>

