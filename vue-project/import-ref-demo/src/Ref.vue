
<template>
  <h2>{{count}}</h2>
  <hr>
  <button @click="update">更新</button>
</template>

<script>
import {
  ref
} from 'vue'
export default {
  setup () {
    // 定义响应式数据 ref对象
    const count = ref(1)
      console.log(count)
      console.log(typeof(count))
    // 更新响应式数据的函数
    function update () {
      // alert('update')
      count.value = count.value + 1
    }
    return {
      count,
      update
    }
  }
}
</script>

