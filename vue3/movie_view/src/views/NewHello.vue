<template>
    <div class="new-hello">
        <h1>{{ msg }}</h1>
    </div>
</template>


<script>
import { ref } from 'vue'
export default {
    name: 'NewHello',
    setup() {
        let msg = ref('Hello Page')
        return { msg, }
    }
}
</script>