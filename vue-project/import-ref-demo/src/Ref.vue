
<template>
<h1>值会被更新</h1>
  <h2>{{count}}</h2>
  <button @click="update">更新1</button>
  <h1> 响应式</h1>
  <button @click="update_reactive">更新2</button>
  <h1 v-for="item in items.info">{{item}}</h1> 
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  setup () {
    // 定义响应式数据 ref对象
    const count = ref(1);
      const items = reactive({info:[]});
      console.log(count)
      console.log(typeof(count))
    // 更新响应式数据的函数
    function update () {
      // alert('update')
      count.value = count.value + 1
    };
          function update_reactive(){
            items.info.push('golang');
              console.log(items.info)
          }
    return {
      count,
      update,
        update_reactive,
        items
    }
  }
}

</script>

