<template>
  <div class="sidebar-container">
    <h3>设置选项</h3>
    <ul>
      <li><a href="#" class="active">个人信息</a></li>
      <li><a href="#">账户安全</a></li>
      <li><a href="#">通知设置</a></li>
      <li><a href="#">隐私设置</a></li>
      <li><a href="#">高级设置</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SettingsSidebar'
}
</script>

<style scoped>
.sidebar-container {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a {
  display: block;
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  color: #333;
}

a.active {
  background-color: #e8f0fe;
  color: #1a73e8;
  font-weight: 500;
}

a:hover {
  background-color: #f5f5f5;
}
</style>  