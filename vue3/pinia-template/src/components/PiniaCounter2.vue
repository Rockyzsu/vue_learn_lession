<script setup>
import counter from './CounterState'
const store = counter()
</script>

<template>
    <div>
        <h1>Counter2</h1>
        <h3 type="button" @click="store.count++">count is {{ store.count }}</h3>
    </div>
</template>