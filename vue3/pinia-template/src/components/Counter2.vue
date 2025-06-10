<template>
    <div>
        <h1>Counter2</h1>
        <h3 type="button" @click="count++">count is {{ count }}</h3>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>