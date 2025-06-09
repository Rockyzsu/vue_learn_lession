<template>
  <div class="view-container">
    <h2>首页</h2>
    <p>欢迎来到Vue 3命名视图示例页面。</p>
    <p>点击导航栏上的链接查看不同页面。</p>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.view-container {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>  