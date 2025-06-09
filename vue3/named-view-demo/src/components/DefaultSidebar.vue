<template>
  <div class="sidebar-container">
    <h3>侧边栏</h3>
    <p>这是侧边栏内容。</p>
    <p>根据当前页面的不同，侧边栏内容可能会有所变化。</p>
  </div>
</template>

<script>
export default {
  name: 'DefaultSidebar'
}
</script>

<style scoped>
.sidebar-container {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>  