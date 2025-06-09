<template>
  <div id="app">
    <header>
      <h1>Vue 3命名视图示例</h1>
      <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/dashboard">仪表盘</router-link>
        <router-link to="/settings">设置</router-link>
      </nav>
    </header>
    
    <main class="container">
      <div class="main-content">
        <!-- 默认视图 -->
        <router-view></router-view>
        
        <!-- 命名视图 - 详情 -->
        <router-view name="detail"></router-view>
      </div>
      
      <div class="sidebar">
        <!-- 命名视图 - 侧边栏 -->
        <router-view name="sidebar"></router-view>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  background-color: #3498db;
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

header h1 {
  margin: 0;
}

nav {
  margin-top: 10px;
}

nav router-link {
  color: white;
  text-decoration: none;
  margin-right: 15px;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

nav router-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.container {
  display: flex;
  gap: 20px;
}

.main-content {
  flex: 3;
}

.sidebar {
  flex: 1;
}

.view-container {
  margin-bottom: 20px;
}
</style>  