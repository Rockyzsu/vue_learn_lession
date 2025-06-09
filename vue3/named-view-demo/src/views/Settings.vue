<template>
  <div class="view-container">
    <h2>设置</h2>
    <div class="settings-section">
      <h3>个人信息</h3>
      <div class="form-group">
        <label>用户名</label>
        <input type="text" value="john_doe">
      </div>
      <div class="form-group">
        <label>邮箱</label>
        <input type="email" value="john@example.com">
      </div>
    </div>
    <div class="settings-section">
      <h3>通知设置</h3>
      <div class="checkbox-group">
        <input type="checkbox" id="email" checked>
        <label for="email">电子邮件通知</label>
      </div>
      <div class="checkbox-group">
        <input type="checkbox" id="push" checked>
        <label for="push">推送通知</label>
      </div>
      <div class="checkbox-group">
        <input type="checkbox" id="sms">
        <label for="sms">短信通知</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsView'
}
</script>

<style scoped>
.view-container {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.settings-section {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 6px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.checkbox-group {
  margin-bottom: 10px;
}

.checkbox-group input {
  margin-right: 5px;
}
</style>  